import LikeSimg from "../images/icon/Like_S_icon.png";
import LikeDimg from "../images/icon/Like_D_icon.png"
import img1 from "../images/01.jpg";

import { Link } from 'react-router-dom';
import { useContext } from "react";
import { StoreContext } from "../store"
import { addUserFav, removeUserFav, setProductDetail } from "../actions";


export default function ProductItem({ product }) {
    const { state:{fav:{products,userInfo}},dispatch } = useContext(StoreContext);
    return (
        <div className="ProductItem_container hvr-grow-shadow">
            <Link to={`/products/${product.category2}/${product.id}`} 
                onClick={()=>{
                    setProductDetail(dispatch, product.id,product.category2,0,0);
                }}
            >
                <img className="pdI_img" src={product.image}/>
            </Link>
            <div className="pdI_Text">
                <div className="pdI_Tex_1">
                    <h3>{product.title}</h3>
                    <div className="pdI_Tag">
                        <h4>{product.category2}</h4>
                    </div>
                </div>
                <div className="pdI_Tex_2">
                    <p>
                    {product.description}
                    </p>
                    {products.every(fav=>fav.id!==product.id)
                        ? <img onClick={()=>{addUserFav(dispatch,userInfo,product)}} className="pdI_Likeico" src={LikeSimg}/> 
                        : <img onClick={()=>{removeUserFav(dispatch,userInfo,product)}} className="pdI_Likeico" src={LikeDimg}/>
                    }
                </div>
            </div>
        </div>
    );}