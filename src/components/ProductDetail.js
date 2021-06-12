import img01 from "../images/01.jpg";
import img02 from "../images/02.png";
import img03 from "../images/03.png";
import people from "../images/people1.png";
import like from "../images/icon/pd_like_ico.png";
import view from "../images/icon/pd_view_ico.png";
import vision from "../images/icon/pd_vision_ico.png";
import download from "../images/icon/pd_download_ico.png";
import whiteLike from "../images/icon/Like_S_icon.png";

export default function ProductDetail() {
  return (
    <div className="ProductDetail_container">
      <div className="PD_a1">
        <div className="PD_title ">
          <h3>Macaw’s Trapdoors</h3>
        </div>
        <div className="PD_a2">
          <div className="PD_a2_l">
            <img className="PD_main_img" src={img01} />
          </div>
          <div className="PD_a2_r">
            <div className="PD_a2_r_box1">
              <h3>2020.9.24 uptade</h3>
            </div>
            <div className="PD_a2_r_box2">
              <div className="PD_a2_r_box2_people">
                <img className="PD_peopleimg" src={people} />
                <h3>jackson</h3>
              </div>
              <div className="PD_a2_r_box2_info">
                <div className="PD_vision">
                  <div className="PD_vision_block">
                    <img className="PD_info_ico PD_icon" src={vision} />
                    <h3>vision:</h3>
                  </div>
                  <div>
                    <select>
                      <option>Chose vision:</option>
                      <option>1.11</option>
                      <option>1.12</option>
                      <option>1.13</option>
                      <option>1.14</option>
                      <option>1.15</option>
                      <option>1.16</option>
                    </select>
                  </div>
                </div>
                <div className="PD_view">
                  <div className="PD_view_block">
                    <img className="PD_info_ico PD_icon" src={view} />
                    <h3>view:</h3>
                  </div>
                  <h3>1221</h3>
                </div>
                <div className="PD_download">
                  <div className="PD_download_block">
                    <img className="PD_info_ico PD_icon" src={download} />
                    <h3>download:</h3>
                  </div>
                  <h3>2332</h3>
                </div>
                <div className="PD_like">
                  <div className="PD_like_block">
                    <img className="PD_info_ico PD_icon" src={like} />
                    <h3>like:</h3>
                  </div>
                  <h3>234</h3>
                </div>
              </div>
            </div>
            <div className="PD_a2_r_box3">
              <img className="PD_like_ico" src={whiteLike} />
              <h3>LIKE</h3>
            </div>
          </div>
        </div>
        <div className="PD_a3">
          <div className="PD_a3_T">
            <img className="PD_a3_Simg" src={img02} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="PD_a3_B">
            <img className="PD_a3_Simg" src={img03} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="PD_a4">
          <div className="PD_download_bolck">
            <div className="PD_download_ico">
              <img className="PD_down_icoimg" src={vision} />
            </div>
            <div>
              <select className="PD_select2">
                <option> Chose vision:</option>
                <option>1.11</option>
                <option>1.12</option>
                <option>1.13</option>
                <option>1.14</option>
                <option>1.15</option>
                <option>1.16</option>
              </select>
            </div>
          </div>
          <div className="PD_download_btn">
            <img className="PD_down_icoimg PD_down_Bicon" src={download} />
            <h3>Download</h3>
            <h3>1.16.1</h3>
          </div>
        </div>
        <div className="PD_a5">
          <div className="PD_a5-1">
            <h3>Comment</h3>
            <div className="PD_a5_line"></div>
          </div>
          <from className="PD_From">
            <input
              className="PD_a5-2"
              placeholder="Type some message......"
            ></input>
            <input
              className="PD_a5-2_btn"
              type="submit"
              value="Send"
            ></input>
          </from>

          {/* <div className="PD_a5-3">
            <h3>Type some message......</h3>
          </div> */}
          <div className="PD_a5-3">
            <div className="PD_a5_message">
              <img className="PD_mag_img" src={people} />
              <h3>Steven :</h3>
              <p>I really like this game~</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
