import { Carousel } from "antd";
import Modimg from "../images/Home/mod.png";
import Textureimg from "../images/Home/texture.png";
import Mapimg from "../images/Home/map.png";
import YTimg from "../images/Home/youtuber.png";
import MC from "../images/logo/MClogo.png";

export default function HomeContent() {
  function btn() {
    document.getElementById("HBbtn").style="border:inset 5px #29a143;";
  }
  return (
    <div className="HC_container">
      <div className="H_header">
        <div className="H_Carousel">
          <Carousel autoplay>
            <div>
              <h3 className="H_Carousel_img">1</h3>
            </div>
            <div>
              <h3 className="H_Carousel_img">2</h3>
            </div>
            <div>
              <h3 className="H_Carousel_img">3</h3>
            </div>
            <div>
              <h3 className="H_Carousel_img">4</h3>
            </div>
          </Carousel>
        </div>
        <div className="H_line">
          <div className="H_line_box"></div>
        </div>
      </div>
      <div className="H_middle">
        <div className="H_M_a1">
          <img className="H_img" src={Mapimg} />
          <div className="H_text">
            <p>
              <span>Maps</span> is a generates a Chinese version of Lorem ipsum
              text consisting of five paragraphs. Each paragraph consists of 6
              to 8 sentences. Each sentence is a pseudo-sentence consisting of
              very rare characters not recognizable{" "}
            </p>
          </div>
        </div>
        <div className="H_M_a2">
          <img className="H_img" src={Textureimg} />
          <div className="H_text">
            <p>
              <span>Texture</span> is a generates a Chinese version of Lorem ipsum
              text consisting of five paragraphs. Each paragraph consists of 6
              to 8 sentences. Each sentence is a pseudo-sentence consisting of
              very rare characters not recognizable{" "}
            </p>
          </div>
        </div>
        <div className="H_M_a3">
          <img className="H_img" src={Modimg} />
          <div className="H_text">
            <p>
              <span>Mods</span> is a generates a Chinese version of Lorem ipsum
              text consisting of five paragraphs. Each paragraph consists of 6
              to 8 sentences. Each sentence is a pseudo-sentence consisting of
              very rare characters not recognizable{" "}
            </p>
          </div>
        </div>
        <div className="H_M_a4">
          <img className="H_img" src={YTimg} />
          <div className="H_text">
            <p>
              <span>Youtuber</span> is a generates a Chinese version of Lorem ipsum
              text consisting of five paragraphs. Each paragraph consists of 6
              to 8 sentences. Each sentence is a pseudo-sentence consisting of
              very rare characters not recognizable{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="H_bottom">
        <div className="H_B_img">
          <div className="H_B_box">
            <img className="H_B_LOGO" src={MC}/>
            <div id="HBbtn"className="H_B_btn" onClick={btn}>
              <h3>GET MINECRAFT 1.17</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
