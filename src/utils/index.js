import jsonInfo from "../json/jsonInfo.json";
import { Normal,Pink,Blue } from "./constants";
export const getTitle = url => {
   const json = jsonInfo.find(
     x => x.url === url
   );
   return json.title;
 }

 export const changeColor =(type)=>{
  var i=1
  switch(type.target.value){
    case "1":
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Normal[i-1]);
      }
      document.documentElement.style.setProperty('--purewhite',Normal[9]);
      document.documentElement.style.setProperty('--pureblack',Normal[10]);
      break;
    case "2":
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Pink[i-1]);
      }
      document.documentElement.style.setProperty('--purewhite',Pink[9]);
      document.documentElement.style.setProperty('--pureblack',Pink[10]);
      break;
    case "3":
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Blue[i-1]);
      }
      document.documentElement.style.setProperty('--purewhite',Blue[9]);
      document.documentElement.style.setProperty('--pureblack',Blue[10]);
      break;
    default:
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Normal[i-1]);
      }
      document.documentElement.style.setProperty('--purewhite',Normal[9]);
      document.documentElement.style.setProperty('--pureblack',Normal[10]);
  }
 }