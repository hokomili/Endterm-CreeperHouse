import img1 from "../images/01.jpg";
import deleteicon from "../images/icon/delete_ico.png";

export default function ProfileContent() {
    return (
        <div className="Profile_item">
            <img className="Profile_item_img" src={img1}/>
            <div className="Profile_item_text">
                <h3>Macaw’s Trapdoors</h3>
                <div className="Profile_item_ico">
                    <div className="pdI_Tag">
                        <h4>Mods</h4>
                    </div>
                    <img src={deleteicon} className="delete_icon"/>
                </div>

            </div>
        </div>
    )};