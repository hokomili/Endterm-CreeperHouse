import {Link,useHistory } from "react-router-dom";
import peopel from "../images/icon/member_ico.png";
import like from "../images/icon/like_ico.png";
import logout from "../images/icon/logout_ico.png";
import manage from "../images/icon/manage_ico.png";
import React, { useContext, useEffect } from "react";
import { logoutFromFirebase, updateUserInfo, getUserOrders ,requestPage } from "../actions";
import { StoreContext } from "../store";
import ProfileContentList from "../components/ProfileContentList";

export default function ProfileContent() {
    const { state: { swap: { page }} } = useContext(StoreContext);
    const { state: { userSignin: { userInfo }, userOrders, }, dispatch, } = useContext(StoreContext);
    const { displayName, email } = userInfo;
    const history = useHistory();
    const handleLogout = () => {
        logoutFromFirebase(dispatch);
        history.push("/homepage");
    };
  return (
    <div className="ProfileContent_container">
        <div className="PrfC_a1">
            <div className="PrfC_title">
                <h3>My Account</h3>
            </div>
            <div className="PrfC_line"></div>
        </div>
        <div className="PrfC_a2">
            <div className="PrfC_Sbox">
                <h3>Profile</h3>
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
                    <h3>Profile</h3>
                    </div>
                    <Link to="/FeedPage" className="PrfC_r_manag_box">
                    <img className="PrfC_r_manag_ico" src={manage} />
                    </Link>
                    <div onClick={handleLogout} className="PrfC_r_logout_box">
                        <img className="PrfC_r_logout_ico" src={logout}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="PrfC_a3">
            <div className="RWD_choose_area">
                <div></div>
            </div>
            <div className="PrfC_choose_area">
                <div onClick={()=>requestPage(dispatch,'All')} className={page==='All'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
                    <h3>All</h3>
                </div>
                <div onClick={()=>requestPage(dispatch,'Mods')} className={page==='Mods'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
                    <h3>Mods</h3>
                </div>
                <div onClick={()=>requestPage(dispatch,'Texture')} className={page==='Texture'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
                    <h3>Texture</h3>
                </div>
                <div onClick={()=>requestPage(dispatch,'Maps')} className={page==='Maps'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
                    <h3>Maps</h3>
                </div>
            </div>
            <div className="PrfC_view_area">
                <div className="PrfC_view_box">
                    <ProfileContentList/>
                </div>
            </div>
        </div>
    </div>
  );
}
