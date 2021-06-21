
import { Link } from "react-router-dom";
import YT from "../images/people1.png";
import YTicon from "../images/icon/youtubepage_ico.png";
import { useContext } from "react";
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";


export default function YoutubertItem({product}) {
    const { dispatch } = useContext(StoreContext);
    return (
        <div className="YTC_Content ">
            <Link className="YTC_Item" to={`/ytsinglepage/${product.id}`} 
                onClick={()=>{
                    setProductDetail(dispatch, product.id,"Youtuber",0,0);
                }}
            >
                <div className="YTC_Il">
                    <img className="YTC_people_img" src={product.author_image}/>
                    <div className="YTC_people_text">
                        <h3>{product.author}</h3>
                        <div className="YTC_people_yt">
                            <img className="YTC_people_yt_ico" src={YTicon}/>
                            <h4>{product.subscribers}m</h4>
                        </div>
                    </div>
                </div>
                <div className="YTC_Ir hvr-grow-shadow">
                    <Link to={`/ytsinglepage/${product.id}`} className="YTC_btn">
                        <h3>more</h3>
                    </Link>
                </div>
            </Link>
        </div>
    );}