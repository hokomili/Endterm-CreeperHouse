import { Layout } from "antd";
import HomeHeader from "../components/Home/Header";
import HomeContent from "../components/Home/Content";
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
      {/* <HomeTitlebar />
      <HomeHeader />
      <HomeContent />
      <HomeFooter /> */}
    </Layout>
  );
}

export default Home;
