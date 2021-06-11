import LikeSimg from "../images/icon/Like_S_icon.png";
import img1 from "../images/01.jpg";


export default function ProductItem() {
    return (
        <div className="ProductItem_container">
            <img className="pdI_img" src={img1}/>
            <div className="pdI_Text">
                <div className="pdI_Tex_1">
                    <h3>Macaw’s Trapdoors</h3>
                    <div className="pdI_Tag">
                        <h4>Mods</h4>
                    </div>
                </div>
                <div className="pdI_Tex_2">
                    <p>
                    Macaw’s Trapdoors adds a wider variety of trapdoors to choose from outside of the vanilla options......
                    </p>
                    <img className="pdI_Likeico" src={LikeSimg}/>
                </div>
            </div>
        </div>
    );}