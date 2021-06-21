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
  switch(type?type:"0"){
    case "normal":
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Normal[i-1]);
      }
      document.documentElement.style.setProperty('--theme','normal');
      document.documentElement.style.setProperty('--purewhite',Normal[9]);
      document.documentElement.style.setProperty('--pureblack',Normal[10]);
      return 'normal';
    case "pink":
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Pink[i-1]);
      }
      document.documentElement.style.setProperty('--theme','pink');
      document.documentElement.style.setProperty('--purewhite',Pink[9]);
      document.documentElement.style.setProperty('--pureblack',Pink[10]);
      return 'pink';
    case "blue":
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Blue[i-1]);
      }
      document.documentElement.style.setProperty('--theme','blue');
      document.documentElement.style.setProperty('--purewhite',Blue[9]);
      document.documentElement.style.setProperty('--pureblack',Blue[10]);
      return 'blue';
    default:
      for(i=1;i<10;i++){
        document.documentElement.style.setProperty('--color'+i,Normal[i-1]);
      }
      document.documentElement.style.setProperty('--theme','normal');
      document.documentElement.style.setProperty('--purewhite',Normal[9]);
      document.documentElement.style.setProperty('--pureblack',Normal[10]);
      return 'normal';
  }
}
export const pageSwap =(type)=>{
  return type;
}