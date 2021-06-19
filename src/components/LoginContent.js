import { Link } from "react-router-dom";
import fbbtn from "../images/icon/fb_btn.png";
import googlebtn from "../images/icon/google_btn.png";

export default function LoginContent() {
  return (
    <div className="LoginContent_container">
      <div className="logC_a1">
        <div className="logC_title">
          <h3>LOG IN</h3>
        </div>
        <div className="logC_line"></div>
      </div>
      <div className="logC_a2">
        <div className="logC_box">
          <div className="logC_box_l">
            <form action="/formprocess.php" method="post" className="logC_form">
              <p>Email:</p>
              <input
                name="Email"
                type="text"
                className="logC_form_input"
                placeholder="Type your email"
              />

              <p>Password:</p>
              <input
                name="Password"
                type="password"
                className="logC_form_input"
                placeholder="Type your password"
              />

              <Link to="/ForgetpwdPage" className="logC_form_fgpwd">
                forgot password?
              </Link>
              <div className="logC_form_btn_flex">
                <Link to="/ProfilePage">
                  <button type="button" className="logC_form_btn">
                    <h3>LOG IN</h3>
                  </button>
                </Link>
              </div>
            </form>
          </div>

          <div className="logC_box_r">
            <button className="logC_r_google">
              <img className="logC_r_google_ico" src={googlebtn} />
              <div className="logC_r_google_text">
                <h3>sign in with google</h3>
              </div>
            </button>
            <Link to="/SignupPage">
                  <h3 className="account_text">Creat an account?</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
