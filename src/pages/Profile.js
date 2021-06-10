import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import ProfileContent from "../components/ProfileContent";
import Footer from "../components/Footer";

function Profile() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="Login_flex">
        <Titlebar />
        <ProfileContent />
        <Footer />
      </div>
    </Layout>
  );
}

export default Profile;
