import { Layout } from "antd";

import HomeContent from "../components/HomeContent";
import HomeNavbar from "../components/Navbar";
import HomeTitlebar from "../components/Titlebar";
import HomeFooter from "../components/Footer";

import { getTitle } from "../utils";
import { setPage } from "../actions";
import { StoreContext } from "../store"
import { useContext, useEffect } from "react";

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

function Home() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);
  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
    
  }, []);// eslint-disable-line react-hooks/exhaustive-deps  
  return (
    <Layout>
      <HomeNavbar/>
      <HomeTitlebar />
      <HomeContent />
      <HomeFooter />
    </Layout>
  );
}

export default Home;
