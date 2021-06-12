import { Link } from "react-router-dom";
export default function SignupContent() {
  return (
    <div className="SignupContent_container">
      <div className="logC_a1">
        <div className="logC_title">
          <h3>Register Account</h3>
        </div>
        <div className="logC_line"></div>
        <div className="SingC_a2">
          <div className="SingC_box">
            <form action="/formprocess.php" method="post" className="logC_form">
              <p>Name:</p>
              <input
                name="Name"
                type="text"
                className="logC_form_input"
                placeholder="Type your name"
              />
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

              <p>Confirm Password:</p>
              <input
                name="Password"
                type="password"
                className="logC_form_input"
                placeholder="Type your password"
              />

              <div className="logC_form_btn_flex">
                <button type="button" className="logC_form_btn">
                  <h3>Sign UP</h3>
                </button>
              </div>
            </form>
          </div>
          <div className="SignupC_bottom_text">
            <h3>
              Already have account?{" "}
              <Link to="/LoginPage">
                <span>Log in</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
