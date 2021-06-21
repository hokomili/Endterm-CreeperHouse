import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Pimg from "../images/people2.jpg";
import YTicon from "../images/icon/youtube_single_ico.png";
import { useContext } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

export default function YTContentS() {
  const { state: { productDetail: { product, ver, edi }, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#81ff83" }} spin />;
  return (
    <>
      {loading
        ? (<div className="YTSingle_Container">
            <div className="spinner-wrap">
              <Spin indicator={antIcon} className="spinner" />
            </div>
          </div>
        ) : (
          <div className="YTSingle_Container">
            <div className="PrfC_a1">
              <div className="PrfC_title">
                <h3>Youtuber</h3>
              </div>
              <div className="YTC_line"></div>
            </div>
            <div className="YTS_a2">
              <div className="YTS_l">
                <iframe
                  className="YTS_RWD_hight"
                  width="100%"
                  height="380px"
                  src={product.main_video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="YTS_r">
                <div className="YTS_intro">
                  <div className="YTS_intro_people">
                    <img className="YTS_intro_people_img" src={product.author_image} />
                    <h2>{product.author}</h2>
                  </div>
                  <div className="YTS_intro_sub">
                    <h3>subscribers :</h3>
                    <h2>{product.subscribers}m</h2>
                  </div>
                  <div className="YTS_intro_Hnum">
                    <h3>Highest number of views :</h3>
                    <h2>{product.highest_number_of_views}K</h2>
                  </div>
                </div>
                <a
                  rel="noreferrer"
                  href={product.youtube_link}
                  className="YTS_yt_btn hvr-pulse"
                  target="_blank"
                >
                  <img className="YTS_yt_ico" src={YTicon} />
                </a>
              </div>
            </div>
            <div className="YTS_a3">
              <div className="YTS_a3-1">
                <div className="YTS_a3-1_l">
                  <div className="YTS_Survival_box">
                    <h3>Survival Series......</h3>
                  </div>
                  <div className="YTS_Survival_YT">
                    <iframe
                      width="100%"
                      height="210px"
                      src={product.survival_video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="YTS_a3-1_r">
                  <p>
                    {product.survival_text}
                  </p>
                </div>
              </div>
              <div className="YTS_a3-2">
                <div className="YTS_a3-2_l">
                  <div className="YTS_Mod_box">
                    <h3>Mod Series......</h3>
                  </div>
                  <div className="YTS_Mod_YT">
                    <iframe
                      width="100%"
                      height="210px"
                      src={product.mod_video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="YTS_a3-2_r">
                  <p>
                    {product.mod_text}
                  </p>
                </div>
              </div>
            </div>    
          </div>
        )
      }
    </>
  );
}
