import {Link} from "react-router-dom";
import peopel from "../images/people1.png";
import like from "../images/icon/like_ico.png";
import logout from "../images/icon/logout_ico.png";
import pfview from "../images/icon/pfview_ico.png";
import pfupload from "../images/icon/upload_ico.png";


export default function FeedContent() {
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
                    <img className="PrfC_photo" src={peopel} alt=""/>
                    <div className="PrfC_l_text">
                        <h2>Dream</h2>
                        <h4>aabbccdd@mail.com</h4>
                        <div className="PrfC_l_like_area">
                            <img className="PrfC_l_like_ico" src={like} alt=""/>
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
                    <Link to="" className="PrfC_r_logout_box">
                        <img className="PrfC_r_logout_ico" src={logout} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
        <div className="PrfC_a3">

            <div className="PrfC_view_area">
                <div className="PrfC_view_box feed_0_flex">
                    <div className="feed_0 ">
                        <img className="feed_ico" src={pfupload} alt=""/>
                        <div className="feed_box hvr-pulse">
                            <h3>UPLOAD</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

  );
}