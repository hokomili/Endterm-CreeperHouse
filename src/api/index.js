import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";
import maps from "../json/Maps.json";
import mods from "../json/Mods.json";
import textures from "../json/Texture.json";
import youtubers from "../json/Youtuber.json";
// Initialize the FirebaseUI Widget using Firebase.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);

const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");
const allOrdersCollectionRef = firebase.firestore().collection("allOrders");

//REFERENCE AUTH
const auth = firebase.auth();

export const getProductById = async (productId,category) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await productsDocRef.collection(category).doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  console.log(url);
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  console.log(collectionName);
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "allProducts")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await productsDocRef.collection(collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    // const user = auth.currentUser._id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      // user,
      id
    });
  })
}
export const feedMaps = () => {
  maps.forEach((map) => {
    const docRef = productsDocRef.collection("Maps").doc();
    const id = docRef.id;
    // const user = auth.currentUser._id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...map,
      // user,
      id
    });
  })
}
export const feedMods = () => {
  mods.forEach((mod) => {
    const docRef = productsDocRef.collection("Mods").doc();
    const id = docRef.id;
    // const user = auth.currentUser._id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...mod,
      // user,
      id
    });
  })
}
export const feedTexture = () => {
  textures.forEach((texture) => {
    const docRef = productsDocRef.collection("Texture").doc();
    const id = docRef.id;
    // const user = auth.currentUser._id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...texture,
      // user,
      id
    });
  })
}
export const feedYoutuber = () => {
  youtubers.forEach((youtuber) => {
    const docRef = productsDocRef.collection("Youtuber").doc();
    const id = docRef.id;
    // const user = auth.currentUser._id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...youtuber,
      // user,
      id
    });
  })
}
export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}

export const registerWithEmailPassword = async (email, password, displayName) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({ displayName })
  return user;
}

export const updateUserInfoApi = async (email, password, displayName) => {
  const user = auth.currentUser;
  if(displayName)
    await user.updateProfile({ displayName });
  if(email)
    await user.updateEmail(String(email));
  if(password)
    await user.updatePassword(password);
  return user;
}

export const createOrderApi = async (order) => {
  const user = auth.currentUser.uid;
  const orderRef = await allOrdersCollectionRef.doc();
  const id = orderRef.id;
  // Store Data for Aggregation Queries
  await orderRef.set({
    ...order,
    id,
    user
  });
  return { ...order, id };
}

export const getOrderById = async (orderId) => {
  const doc = await allOrdersCollectionRef.doc(orderId).get();
  return doc.data()
}

export const getOrderByUser = async () => {
  const user = auth.currentUser.uid;
  let jsonOrders = [];

  // QUERY Orders
  const querySnapshot = await allOrdersCollectionRef.where("user", "==", user).get();
  querySnapshot.forEach((doc) => {
    jsonOrders.push(doc.data());
  });
  return jsonOrders;
}

export const signOut = () => {
  auth.signOut();
}

export const checkLoginApi = () => {
  const user = auth.currentUser;
  return user.uid?  true : false;
}

