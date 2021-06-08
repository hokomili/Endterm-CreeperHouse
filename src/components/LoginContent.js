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

              <h3 className="logC_form_fgpwd">forget password?</h3>
              <div className="logC_form_btn_flex">
                <button type="button" className="logC_form_btn">
                  <h3>LOG IN</h3>
                </button>
              </div>
            </form>
          </div>

          <div className="logC_box_r">
            <button className="logC_r_google">
              <img className="logC_r_google_ico" src={googlebtn}/>
              <div className="logC_r_google_text">
                <h3>sign in with google</h3>
              </div>
            </button>
            <button className="logC_r_fb">
              <img className="logC_r_fb_ico" src={fbbtn} />
              <div className="logC_r_fb_text">
                <h3>sign in with google</h3>
              </div>
            </button>
            <button className="logC_r_signup">
                <h3>SIGN UP</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
