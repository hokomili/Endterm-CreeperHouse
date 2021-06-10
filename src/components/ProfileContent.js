import {Link} from "react-router-dom";
import peopel from "../images/people1.png";
import like from "../images/icon/like_ico.png";
import logout from "../images/icon/logout_ico.png";
import manage from "../images/icon/manage_ico.png";


export default function ProfileContent() {
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
                <h3>Profile</h3>
            </div>
            <div className="PrfC_Bbox">
                <div className="PrfC_Bbox_l">
                    <img className="PrfC_photo" src={peopel}/>
                    <div className="PrfC_l_text">
                        <h2>Dream</h2>
                        <h4>aabbccdd@mail.com</h4>
                        <div className="PrfC_l_like_area">
                            <img className="PrfC_l_like_ico" src={like}/>
                            <div className="PrfC_l_like_num">113</div>
                        </div>
                    </div>
                </div>
                <div className="PrfC_Bbox_r">
                    <Link to="/FeedPage"className="PrfC_r_manag_box">
                        <img className="PrfC_r_manag_ico" src={manage}/>
                    </Link>
                    <Link className="PrfC_r_logout_box">
                        <img className="PrfC_r_logout_ico" src={logout}/>
                    </Link>
                </div>
            </div>
        </div>
        <div className="PrfC_a3">
            <div className="PrfC_choose_area">
                <div className="PrfC_cho_box PrfC_cho_hv">
                    <h3 >All</h3>
                </div>
                <div className="PrfC_cho_box PrfC_cho_hv">
                    <h3>Mods</h3>
                </div>
                <div className="PrfC_cho_box PrfC_cho_hv">
                    <h3>Texture</h3>
                </div>
                <div className="PrfC_cho_box PrfC_cho_hv">
                    <h3>Maps</h3>
                </div>
            </div>
            <div className="PrfC_view_area">
                <div className="PrfC_view_box">

                </div>
            </div>
        </div>

      </div>

  );
}