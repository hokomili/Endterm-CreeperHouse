import { Layout } from "antd";
import * as QueryString from "query-string";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import SignupContent from "../components/SignupContent";
import Footer from "../components/Footer";

function SignUp(props) {
  const { redirect } = QueryString.parse(props.location.search);
  return (
    <Layout>
      <Navbar />
      <div className="Login_flex" >
        <Titlebar />
        <SignupContent redirect={redirect}/>
        <Footer />          
      </div>

    </Layout>
  );
}

export default SignUp;