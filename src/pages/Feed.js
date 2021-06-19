import { Layout } from 'antd';
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar"
import Header from "../components/ProductHeader"
import Footer from "../components/Footer"
import Feeder from "../components/Feeder";

function Feed() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
        <Feeder />
        <Footer/>
      </div>
    </Layout>
  );
}

export default Feed;
