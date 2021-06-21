import { Layout } from "antd";
import { Link } from "react-router-dom";
import logo from "../images/logo/white_logo.png";

function Enter() {
  return (
    <Layout className="enter_layout">
      <img className="enter_logo" src={logo}></img>
      <div className="enter_mask">
        <div className="enter_r">
          <div className="enter_title">
            <h3>
              Create the best sight<br></br> experience for you.
            </h3>
          </div>
          <div className="enter_r_btn_area">
            <Link  to='/homepage' className="enter_start_btn hvr-shutter-out-horizontal hvr-wobble-horizontal">
              <h3>START</h3>
            </Link>
            <Link to='/loginpage' className="enter_login_btn hvr-pulse-shrink"><h3>Log in</h3></Link>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="enter_img"></div>
    </Layout>
  );
}

export default Enter;
