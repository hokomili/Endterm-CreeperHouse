import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import LoginContent from "../components/LoginContent";
import Footer from "../components/Footer";

function Login() {
  return (
    <Layout className="container">
      <Navbar />
      <div className="Login_flex" >
        <Titlebar />
        <LoginContent />
        <Footer />          
      </div>

    </Layout>
  );
}

export default Login;
