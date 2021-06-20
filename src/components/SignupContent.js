import { Link,useHistory } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { registerToFirebase } from '../actions'
import { StoreContext } from "../store"

export default function SignupContent({ redirect }) {
  const { state: { userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
  const history = useHistory();

  const onFinish = async (values) => {
    values.preventDefault();
    console.log('Received values of form: ', values.target.elements);
    await registerToFirebase(dispatch, values.target.elements);
  };

  /*useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo]);// eslint-disable-line react-hooks/exhaustive-deps*/
  return (
    <div className="SignupContent_container">
      <div className="logC_a1">
        <div className="logC_title">
          <h3>Register Account</h3>
        </div>
        <div className="logC_line"></div>
        <div className="SingC_a2">
          <div className="SingC_box">
            <form onSubmit={onFinish} className="logC_form">
              <p>Name:</p>
              <input
                name="name"
                type="text"
                className="logC_form_input"
                placeholder="Type your name"
              />
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

              <p>Confirm Password:</p>
              <input
                name="confirm"
                type="password"
                className="logC_form_input"
                placeholder="Type your password"
              />

              <div className="logC_form_btn_flex">
                <button type="submit" className="logC_form_btn">
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
