import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";

import ProductHeader from "../components/ProductHeader";

import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function Category() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
        
        <ProductHeader />
        <ProductList />
        

        <Footer />
      </div>
    </Layout>
  );
}

export default Category;
