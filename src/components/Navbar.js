import { Link,useHistory  } from "react-router-dom";
import memberimg from "../images/icon/member_ico.png";
import homeico from "../images/icon/home_ico.png";
import HV_homeico from "../images/icon/hv_home_ico.png";
import itemico from "../images/icon/item_ico.png";
import ytico from "../images/icon/youtube_ico.png";
import twrico from "../images/icon/twitter_ico.png";
import fbico from "../images/icon/fb_ico.png";
import dscico from "../images/icon/discord_ico.png";
import NavItem from "./NavItem";
import { useState,useEffect,useContext } from "react";
import { StoreContext } from "../store";
import { changeColor } from "../utils";
import { setTheme } from "../actions";

export default function Navbar() {
  // function name1() {
  //     document.getElementById("A").style="background-color:red;";
  //     document.getElementById("A").src={HV_homeico};
  // }
  const { state: { userSignin : { userInfo, remember } } } = useContext(StoreContext);
  const {state: {theme :{color}},dispatch}=useContext(StoreContext);
  const history = useHistory();
  const goToProfile = () => {
    history.push("/loginpage?redirect=profilepage");
  };
  const changes =(e)=>{
    switch(e.target.value){
      case'1':
      setTheme(dispatch,'normal');
      break;
      case'2':
      setTheme(dispatch,'pink');
      break;
      case'3':
      setTheme(dispatch,'blue');
      break;
      default:
        setTheme(dispatch,'normal');
    }
  }
  useEffect(() => {
    setTheme(dispatch,color);
    if(remember)
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    else
      localStorage.removeItem("userInfo");
  }, [userInfo, remember]);
  return (
    <div className="Navbar_content" id="NAV">
      <div className="Navbar_a1">
        <div onClick={goToProfile} className="navbar_flex Navbar_member_text" >
          {userInfo
              ? userInfo.photoURL
                ? <img className="Navbar_member_img" src={userInfo.photoURL} />
                : <img className="Navbar_member_img" src={memberimg} />
              : <img className="Navbar_member_img" src={memberimg} />
          }
          <h3>
            {userInfo
              ? `${userInfo.displayName}`
              : `Log in`
            }
          </h3>
        </div>
      </div>
      <div className="Navbar_a2">
        <NavItem 
          to="/homepage"
          className="nav-item Navbar_Home navbar_flex hvr-fade"
          activeClassName="nav-item--active"
          title="Home"
        >
          <img id="A" className="Navbar_Home_p navbar_ico" src={homeico} />
          <div className="Navbar_w ">
            <h3>Home</h3>
          </div>
        </NavItem>
        <NavItem
          to="/category/mods"
          className="nav-item Navbar_Mod navbar_flex hvr-fade"
          activeClassName="nav-item--active"
          title="Mods"
        >
          <img className="Navbar_Mod_p navbar_ico" src={itemico} />
          <div className="Navbar_w">
            <h3>Mods</h3>
          </div>
        </NavItem>
        <NavItem
          to="/category/texture"
          className="nav-item Navbar_Texture navbar_flex hvr-fade"
          activeClassName="nav-item--active"
          title="Texture"
        >
          <img className="Navbar_Texture_p navbar_ico" src={itemico} />
          <div className="Navbar_w">
            <h3>Texture</h3>
          </div>
        </NavItem>
        <NavItem
          to="/category/maps"
          className="nav-item Navbar_Map navbar_flex hvr-fade"
          activeClassName="nav-item--active"
          title="Maps"
        >
          <img className="Navbar_Map_p navbar_ico" src={itemico} />
          <div className="Navbar_w">
            <h3>Maps</h3>
          </div>
        </NavItem>
        <NavItem
          to="/youtuberpage"
          className="nav-item Navbar_Youtuber navbar_flex hvr-fade"
          activeClassName="nav-item--active"
          title="Youtuber"
        >
          <img className="Navbar_Youtuber_p navbar_ico" src={ytico} />
          <div className="Navbar_w">
            <h3>Youtuber</h3>
          </div>
        </NavItem>
        <div className="Navbar_Social">
          <img className="Navbar_twitter hvr-pulse-grow" src={twrico} />
          <img className="Navbar_facebook hvr-pulse-grow" src={fbico} />
          <img className="Navbar_discord hvr-pulse-grow" src={dscico} />
        </div>
      </div>

      <div className="Navbar_a3">
        <form onChange={changes}>
          <div className="Navbar_normal navbar_choic_flex">
            <div className="Navbar_nm_choice">
              <input
                type="radio"
                name="choice"
                value="1"
                className="navbar_choic"
                defaultChecked={color==='normal'?'checked':''}
              />{" "}
            </div>
            <div className="Navbar_nm_text navbar_choic_p">
              <h3>Normal</h3>
            </div>
          </div>
          <div className="Navbar_pink navbar_choic_flex">
            <div className="Navbar_pk_choice">
              <input
                type="radio"
                name="choice"
                value="2"
                className="navbar_choic"
                defaultChecked={color==='pink'?'checked':''}
              />{" "}
            </div>
            <div className="Navbar_pk_text navbar_choic_p">
              <h3>Pink</h3>
            </div>
          </div>
          <div className="Navbar_ice navbar_choic_flex">
            <div className="Navbar_ice_choice">
              <input
                type="radio"
                name="choice"
                value="3"
                className="navbar_choic"
                defaultChecked={color==='blue'?'checked':''}
              />{" "}
            </div>
            <div className="Navbar_ice_text navbar_choic_p">
              <h3>Blue</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
