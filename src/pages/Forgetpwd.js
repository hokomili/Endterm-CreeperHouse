import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import ForgetpwdContent from "../components/ForgetpwdContent";
import Footer from "../components/Footer";

function ForgetPwd() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="Login_flex" >
        <Titlebar />
        <ForgetpwdContent />
        <Footer />          
      </div>

    </Layout>
  );
}

export default ForgetPwd;