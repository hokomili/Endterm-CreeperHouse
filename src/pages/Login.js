import { Layout } from "antd";
import * as QueryString from "query-string";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import LoginContent from "../components/LoginContent";
import Footer from "../components/Footer";

function Login(props) {
  const { redirect } = QueryString.parse(props.location.search);
  console.log(redirect);
  return (
    <Layout className="container">
      <Navbar />
      <div className="Login_flex" >
        <Titlebar />
        <LoginContent redirect={redirect}/>
        <Footer />          
      </div>

    </Layout>
  );
}

export default Login;
