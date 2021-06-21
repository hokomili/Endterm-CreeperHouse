import { Carousel } from "antd";
import { Link } from "react-router-dom";

import YoutuberList from "../components/YoutuberList"

export default function Youtube({title}) {
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
            <Link to="">
              <h3 className="H_Carousel_img">1</h3>
            </Link>
            <Link to="">
              <h3 className="H_Carousel_img">2</h3>
            </Link>
            <Link to="">
              <h3 className="H_Carousel_img">3</h3>
            </Link>
            <Link to="">
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
        <YoutuberList title={title}/>
      </div>
    </div>
  );
}
