import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import SignupContent from "../components/SignupContent";
import Footer from "../components/Footer";

function SignUp() {
  return (
    <Layout>
      <Navbar />
      <div className="Login_flex" >
        <Titlebar />
        <SignupContent />
        <Footer />          
      </div>

    </Layout>
  );
}

export default SignUp;