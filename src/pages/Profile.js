import { Layout } from "antd";
import { useContext,useEffect } from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import ProfileContent from "../components/ProfileContent";
import Footer from "../components/Footer";
import {getUserFav} from "../actions"
import { StoreContext } from "../store"
function Profile() {
  const { state: { page: { title } , fav:{products,userInfo} }, dispatch } = useContext(StoreContext);
  useEffect(() => {
    getUserFav(dispatch,userInfo)
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
        <ProfileContent />
        <Footer />
      </div>
    </Layout>
  );
}

export default Profile;
