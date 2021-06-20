import logo from "../images/logo/nomal_logo.png";
import Search from "../images/icon/search_ico.png";


function Hambager(params) {
    // document.getElementById('NAV').style.transform = 'none';
    let checkbox = document.getElementById('nav-toggle');
    let ham = document.getElementById('NAV');
    if(checkbox.checked == true){
        ham.style.transform = 'none';
    }else{
        ham.style.transform = 'translateX(-100%)';
        ham.style.transform = 'transition: transform .5s';
    }
}




export default function Titlebar() {
  return (
    <div className="Titlebar_flex">
      <input id="nav-toggle" type="checkbox"  onClick={Hambager}></input>
      <label for="nav-toggle" class="ham">
        <div class="ham-origin">
          <div class="ham-bar ham-bar--top"></div>
          <div class="ham-bar ham-bar--middle"></div>
          <div class="ham-bar ham-bar--bottom"></div>
        </div>
      </label>
      <img className="Titlebar_logo" src={logo} />
      <div className="Titlebar_search">
        <img src={Search} className="Titlbar_search_ico" />
      </div>
    </div>
  );
}
