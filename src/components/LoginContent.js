import { Link,useHistory } from "react-router-dom";
import fbbtn from "../images/icon/fb_btn.png";
import googlebtn from "../images/icon/google_btn.png";
import React, { useContext, useEffect } from "react";
import { checkLogin, loginToFirebase, rememberLoginUser } from '../actions'
import { StoreContext } from "../store"

export default function LoginContent({redirect}) {
  const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  const history = useHistory();
 
  const onFinish = async (values) => {
    values.preventDefault();
    console.log('Received values of form: ', values.target.elements);
    await loginToFirebase(dispatch, values.target.elements);
  };

  const onChange = e => {
    rememberLoginUser(dispatch, e.target.checked);
  }

  useEffect(() => {    
    if( userInfo && checkLogin(dispatch) ) history.push(redirect);
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps
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
            <form onSubmit={onFinish} className="logC_form">
              <p>Email:</p>
              <input
                name="email"
                type="text"
                className="logC_form_input"
                placeholder="Type your email"
              />

              <p>Password:</p>
              <input
                name="password"
                type="password"
                className="logC_form_input"
                placeholder="Type your password"
              />

              <Link to="/ForgetpwdPage" className="logC_form_fgpwd">
                forgot password?
              </Link>
              <div className="logC_form_btn_flex">
                <button type="submit" className="logC_form_btn">
                  <h3>LOG IN</h3>
                </button>
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
