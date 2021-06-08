import { Layout } from "antd";

import HomeContent from "../components/HomeContent";
import HomeNavbar from "../components/Navbar";
import HomeTitlebar from "../components/Titlebar";
import HomeFooter from "../components/Footer";

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

function Home() {
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
