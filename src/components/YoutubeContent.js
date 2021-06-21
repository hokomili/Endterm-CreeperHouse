import { Carousel } from "antd";
import { Link } from "react-router-dom";

import YoutuberList from "../components/YoutuberList"
import { useContext } from "react";
import { StoreContext } from "../store";


export default function Youtube({title}) {
  const { state: { page: { products }, requestProducts: { loading } } } = useContext(StoreContext);
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
          {loading
              ?(
                <Carousel autoplay>
                <Link to="">
                  <h3 className="H_Carousel_img">1</h3>
                </Link>
                <Link to="">
                  <h3 className="PHC_Carousel_img">2</h3>
                </Link>
                <Link to="">
                  <h3 className="PHC_Carousel_img">3</h3>
                </Link>
                <Link to="">
                  <h3 className="PHC_Carousel_img">4</h3>
                </Link>
                </Carousel>
                ) : (
                  <Carousel autoplay>
                  <iframe
                  className="H_Carousel_img"
                  width="100%"
                  height="380px"
                  src={products[2].main_video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  ></iframe>
                  <iframe
                  className="H_Carousel_img"
                  width="100%"
                  height="380px"
                  src={products[4].main_video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  ></iframe><iframe
                  className="H_Carousel_img"
                  width="100%"
                  height="380px"
                  src={products[6].main_video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  ></iframe><iframe
                  className="H_Carousel_img"
                  width="100%"
                  height="380px"
                  src={products[7].main_video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  ></iframe>
                  </Carousel>
              )
            }
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
