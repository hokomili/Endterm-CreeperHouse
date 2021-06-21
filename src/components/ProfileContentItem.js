import img1 from "../images/01.jpg";
import deleteicon from "../images/icon/delete_ico.png";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { StoreContext } from "../store"
import { addUserFav, removeUserFav, setProductDetail } from "../actions";

export default function ProfileContent({product}) {
    const { state:{fav:{products,userInfo}},dispatch } = useContext(StoreContext);
    return (
        <div className="Profile_item hvr-grow-shadow">
            <Link to={`/products/${product.category2}/${product.id}`} 
                onClick={()=>{
                    setProductDetail(dispatch, product.id,product.category2,0,0);
                }}
            >
                <img className="Profile_item_img" src={product.image}/>
            </Link>
            <div className="Profile_item_text">
                <h3>{product.title}</h3>
                <div className="Profile_item_ico">
                    <div className="pdI_Tag">
                        <h4>{product.category2}</h4>
                    </div>
                    <img onClick={()=>{removeUserFav(dispatch,userInfo,product)}} src={deleteicon} className="delete_icon"/>
                </div>

            </div>
        </div>
    )};