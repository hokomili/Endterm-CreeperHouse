import logo from "../images/logo/nomal_logo.png";
import Search from "../images/icon/search_ico.png";


export default function Titlebar() {


    return(
        <div className="Titlebar_flex">
            <img className="Titlebar_logo" src={logo}/>
            <div className="Titlebar_search">
                <img src={Search} className="Titlbar_search_ico"/>
            </div>
        </div>
    );
}