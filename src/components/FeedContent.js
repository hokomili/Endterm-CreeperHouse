import {Link,useHistory} from "react-router-dom";
import peopel from "../images/people1.png";
import like from "../images/icon/like_ico.png";
import logout from "../images/icon/logout_ico.png";
import pfview from "../images/icon/pfview_ico.png";
import normal from "../images/icon/upload_ico.png";
import pink from "../images/icon/pink_up.png";
import blue from "../images/icon/blue_up.png";
import React, { useContext, useEffect } from "react";
import { logoutFromFirebase, updateUserInfo, getUserOrders } from "../actions";
import { StoreContext } from "../store";
import ProfileContentList from "../components/ProfileContentList";


export default function FeedContent() {
    const { state: { userSignin: { userInfo }, userOrders, }, dispatch, } = useContext(StoreContext);
    const { displayName, email } = userInfo;
    const history = useHistory();
    const { state: { theme: { color }} } = useContext(StoreContext);
    function upload(color){
        console.log(color);
        switch(color){
        case 'pink':
            return pink;
        case 'blue':
            return blue;
        default:
            return normal;
        }
    }
    const handleLogout = () => {
        logoutFromFirebase(dispatch);
        history.push("/homepage");
    };
    return (

      <div className="ProfileContent_container">
        <div className="PrfC_a1">
          <div className="PrfC_title">
            <h3>My  Account</h3>
          </div>
          <div className="PrfC_line"></div>
        </div>
        <div className="PrfC_a2">
            <div className="PrfC_Sbox">
                <h3>Management</h3>
            </div>
            <div className="PrfC_Bbox">
                <div className="PrfC_Bbox_l">
                    {userInfo.photoURL
                    ? <img className="PrfC_photo" src={userInfo.photoURL} />
                    : <img className="PrfC_photo" src={peopel} />
                    }
                    <div className="PrfC_l_text">
                    <h2>{userInfo.displayName}</h2>
                    <h4>{userInfo.email}</h4>
                    <div className="PrfC_l_like_area">
                        <img className="PrfC_l_like_ico" src={like} />
                        <div className="PrfC_l_like_num">113</div>
                    </div>
                    </div>
                </div>
                <div className="PrfC_Bbox_r">
                    <div className="PrfC_Sbox_RWD">
                    <h3>Management</h3>
                    </div>
                    <Link to="/ProfilePage"className="PrfC_r_manag_box">
                        <img className="PrfC_r_manag_ico" src={pfview} alt=""/>
                    </Link>
                    <div onClick={handleLogout} className="PrfC_r_logout_box">
                        <img className="PrfC_r_logout_ico" src={logout} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="PrfC_a3">

            <div className="PrfC_view_area">
                <div className="PrfC_view_box feed_0_flex">
                    <div className="feed_0">
                        <img className="feed_ico" src={upload(color)} alt=""/>
                        <div className="feed_box">
                            <h3>UPLOAD</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

  );
}