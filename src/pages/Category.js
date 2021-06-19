import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";

import ProductHeader from "../components/ProductHeader";

import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { getTitle } from "../utils";
import { setPage } from "../actions";
import { StoreContext } from "../store"
import { useContext, useEffect } from "react";

function Category() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);
  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps  
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
        
        <ProductHeader title={title}/>
        <ProductList />
        

        <Footer />
      </div>
    </Layout>
  );
}

export default Category;
