import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import YoutubeSingleContent from "../components/YTSingleContent";
import Footer from "../components/Footer";

function YoutubeSingle() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="Login_flex">
        <Titlebar />
        <YoutubeSingleContent />
        <Footer />
      </div>
    </Layout>
  );
}

export default YoutubeSingle;
