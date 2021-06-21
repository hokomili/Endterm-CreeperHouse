import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import YoutubeContent from "../components/YoutubeContent";
import Footer from "../components/Footer";
import { getTitle } from "../utils";
import { setPage } from "../actions";
import { StoreContext } from "../store"
import { useContext, useEffect } from "react";

function Youtube() {
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
        <YoutubeContent title={title}/>
        <Footer />
      </div>
    </Layout>
  );
}

export default Youtube;
