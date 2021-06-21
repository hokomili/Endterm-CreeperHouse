import img01 from "../images/01.jpg";
import img02 from "../images/02.png";
import img03 from "../images/03.png";
import people from "../images/people1.png";
import like from "../images/icon/pd_like_ico.png";
import view from "../images/icon/pd_view_ico.png";
import vision from "../images/icon/pd_vision_ico.png";
import download from "../images/icon/pd_download_ico.png";
import whiteLike from "../images/icon/Like_S_icon.png";
import { useContext } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

export default function ProductDetail() {
  const { state: { productDetail: { product, ver, edi }, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#81ff83" }} spin />;
  return (
    <div className="ProductDetail_container">
      {loading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
        <div className="PD_a1">
          <div className="PD_title ">
            <h3>{product.title}</h3>
          </div>
          <div className="PD_a2">
            <div className="PD_a2_l">
              <img className="PD_main_img" src={product.image} />
            </div>
            <div className="PD_a2_r">
              <div className="PD_a2_r_box1">
                <h3>{product.last_updated}</h3>
              </div>
              <div className="PD_a2_r_box2">
                <div className="PD_a2_r_box2_people">
                  <img className="PD_peopleimg" src={product.author_image} />
                  <h3>{product.author}</h3>
                </div>
                <div className="PD_a2_r_box2_info">
                  <div className="PD_vision">
                    <div className="PD_vision_block">
                      <img className="PD_info_ico PD_icon" src={vision} />
                      <h3>version:</h3>
                    </div>
                    <div>
                    {product.version?
                      <select
                        value={ver}
                        className="PD_select"
                        onChange={(vert) => {setProductDetail(dispatch, product.id,product.category2,vert.target.value, edi)
                        console.log(vert)
                        }
                      
                      }
                      >
                        <option >Chose version:</option>
                        {[...Array(product.version.length).keys()].map((x) => (
                          <option key={x} value={product.version[x]}>
                            {product.version[x]}
                          </option>
                        ))}
                      </select>:0}
                    </div>
                  </div>
                  <div className="PD_view">
                    <div className="PD_view_block">
                      <img className="PD_info_ico PD_icon" src={view} />
                      <h3>view:</h3>
                    </div>
                    <h3>{product.views}</h3>
                  </div>
                  <div className="PD_download">
                    <div className="PD_download_block">
                      <img className="PD_info_ico PD_icon" src={download} />
                      <h3>download:</h3>
                    </div>
                    <h3>{product.downloads}</h3>
                  </div>
                  <div className="PD_like">
                    <div className="PD_like_block ">
                      <img className="PD_info_ico PD_icon" src={like} />
                      <h3>like:</h3>
                    </div>
                    <h3>{product.like}</h3>
                  </div>
                </div>
              </div>
              <div className=" PD_a2_r_box3 hvr-pulse">
                <img className="PD_like_ico " src={whiteLike} />
                <h3>LIKE</h3>
              </div>
            </div>
          </div>
          <div className="PD_a3">
            <div className="PD_a3_T">
              <img className="PD_a3_Simg" src={product.dtlimg01} />
              <p>
                {product.dtlimg01_text}
              </p>
            </div>
            <div className="PD_a3_B">
              <img className="PD_a3_Simg" src={product.dtlimg02} />
              <p>
                {product.dtlimg02_text}
              </p>
            </div>
          </div>
          <div className="PD_a4">
            <div className="PD_download_bolck">
              <div className="PD_download_ico">
                <img className="PD_down_icoimg" src={vision} />
              </div>
              <div>
                {product.version?
                  <select
                    value={ver}
                    className="PD_select2"
                    onChange={(vert) => {setProductDetail(dispatch, product.id,product.category2,vert.target.value, edi)
                    console.log(vert)
                    }
                  
                  }
                  >
                    <option >Chose version:</option>
                    {[...Array(product.version.length).keys()].map((x) => (
                      <option key={x} value={product.version[x]}>
                        {product.version[x]}
                      </option>
                    ))}
                  </select>:0}
              </div>
            </div>
            <div className="PD_download_btn hvr-shrink">
              <img className="PD_down_icoimg PD_down_Bicon" src={download} />
              <h3>Download now</h3>
            </div>
          </div>
          <div className="PD_a5">
            <div className="PD_a5-1">
              <h3>Comment</h3>
              <div className="PD_a5_line"></div>
            </div>
            <form className="PD_From">
              <input
                className="PD_a5-2"
                placeholder="Type some message......"
              ></input>
              <input
                className="PD_a5-2_btn"
                type="submit"
                value="Send"
              ></input>
            </form>

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
      )}
    </div>
  );
}
