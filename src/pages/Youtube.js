import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import YoutubeContent from "../components/YoutubeContent";
import Footer from "../components/Footer";

function Youtube() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="Login_flex">
        <Titlebar />
        <YoutubeContent />
        <Footer />
      </div>
    </Layout>
  );
}

export default Youtube;
