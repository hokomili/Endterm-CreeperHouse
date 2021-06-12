
import { Link } from "react-router-dom";
import YT from "../images/people1.png";
import YTicon from "../images/icon/youtubepage_ico.png";


export default function YoutubertItem() {
    return (
        <div className="YTC_Content">
          <div className="YTC_Item">
            <div className="YTC_Il">
                <img className="YTC_people_img" src={YT}/>
                <div className="YTC_people_text">
                    <h3>阿神</h3>
                    <div className="YTC_people_yt">
                        <img className="YTC_people_yt_ico" src={YTicon}/>
                        <h4>100K</h4>
                    </div>
                </div>
            </div>
            <div className="YTC_Ir">
                <Link to="/YTSinglePage" className="YTC_btn">
                    <h3>more info</h3>

                </Link>
            </div>
          </div>
        </div>
    );}