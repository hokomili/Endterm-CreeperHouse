import {Link} from "react-router-dom"


export default function ForgerPwd() {
  return (

      <div className="ForgetpwdContent_container">
        <div className="logC_a1">
          <div className="logC_title">
            <h3>Forget Password</h3>
          </div>
          <div className="logC_line"></div>
        </div>
        <div className="Forget_a2">
          <div className="SingC_box">
            <form action="/formprocess.php" method="post" className="logC_form">
              <p>Email:</p>
              <input
                name="Email"
                type="text"
                className="logC_form_input"
                placeholder="Type your email"
              />

              

              <div className="logC_form_btn_flex">
                <button type="button" className="logC_form_btn">
                  <h3>Send</h3>
                </button>
              </div>
            </form>
          </div>
          <div className="ForgetC_bottom_text">
            <h3>
              Already have account?{" "}
              <Link to="/LoginPage">
                <span>Log in</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>

  );
}
