import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import YoutubeSingleContent from "../components/YTSingleContent";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"
function YoutubeSingle({match}) {
  const { dispatch } = useContext(StoreContext);
  useEffect(() => {
     setProductDetail(dispatch, match.params.youtuber, "Youtuber",0,0)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
        <YoutubeSingleContent />
        <Footer />
      </div>
    </Layout>
  );
}

export default YoutubeSingle;
