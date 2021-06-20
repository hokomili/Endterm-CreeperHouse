import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Pimg from "../images/people2.jpg";
import YTicon from "../images/icon/youtube_single_ico.png";

export default function YTContentS() {
  return (
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
            src="https://www.youtube.com/embed/grIIxQ25pWM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="YTS_r">
          <div className="YTS_intro">
            <div className="YTS_intro_people">
              <img className="YTS_intro_people_img" src={Pimg} />
              <h2>阿神</h2>
            </div>
            <div className="YTS_intro_sub">
              <h3>subscribers :</h3>
              <h2>100K</h2>
            </div>
            <div className="YTS_intro_Hnum">
              <h3>Highest number of views :</h3>
              <h2>200K</h2>
            </div>
          </div>
          <a
            href="https://www.youtube.com/channel/UCnJEWsS5agXCkqIpyHC9Grg"
            className="YTS_yt_btn"
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
                src="https://www.youtube.com/embed/asEr0siumvY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="YTS_a3-1_r">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
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
                src="https://www.youtube.com/embed/ckMt8n8Rdhw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="YTS_a3-2_r">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
