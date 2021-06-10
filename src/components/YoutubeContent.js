import { Carousel } from "antd";
import { Link } from "react-router-dom";
import YT from "../images/people1.png";
import YTicon from "../images/icon/youtubepage_ico.png";


export default function Youtube() {
  return (
    <div className="Youtube_Container">
      <div className="PrfC_a1">
        <div className="PrfC_title">
          <h3>Youtuber</h3>
        </div>
        <div className="YTC_line"></div>
      </div>
      <div className="YTC_a2">
        <div className="YT_Carousel">
          <Carousel autoplay>
            <Link>
              <h3 className="H_Carousel_img">1</h3>
            </Link>
            <Link>
              <h3 className="H_Carousel_img">2</h3>
            </Link>
            <Link>
              <h3 className="H_Carousel_img">3</h3>
            </Link>
            <Link>
              <h3 className="H_Carousel_img">4</h3>
            </Link>
          </Carousel>
        </div>
      </div>
      <div className="YTC_a3">
        <div className="PrfC_choose_area">
          <div className="PrfC_cho_box PrfC_cho_hv">
            <h3>All</h3>
          </div>
          <div className="PrfC_cho_box PrfC_cho_hv">
            <h3>Mods</h3>
          </div>
          <div className="PrfC_cho_box PrfC_cho_hv">
            <h3>Survival</h3>
          </div>
          <div className="PrfC_cho_box PrfC_cho_hv">
            <h3>Other</h3>
          </div>
        </div>
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
      </div>
    </div>
  );
}
