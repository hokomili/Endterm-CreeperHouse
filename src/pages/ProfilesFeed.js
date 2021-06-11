import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import FeedContent from "../components/FeedContent";
import Footer from "../components/Footer";

function ProfileFeed() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
        <FeedContent />
        <Footer />
      </div>
    </Layout>
  );
}

export default ProfileFeed;