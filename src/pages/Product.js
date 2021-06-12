import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";

// import ProductHeader from "../components/ProductHeader";

import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";

function Product() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
         <ProductDetail/>
        <Footer />
      </div>
    </Layout>
  );
}

export default Product;
