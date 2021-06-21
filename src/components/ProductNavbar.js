import { useContext } from "react";
import { StoreContext } from "../store";
import { requestPage }from "../actions";
export default function ProductNavbar() {
  const { state: { swap: { page }},dispatch } = useContext(StoreContext);
  return (
    <div className="ProductNavbar_container">
      <div className="PrfC_choose_area">
        <div onClick={()=>requestPage(dispatch,'All')} className={page==='All'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
          <h3>All</h3>
        </div>
        <div onClick={()=>requestPage(dispatch,'Popular')} className={page==='Popular'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
          <h3>Popular</h3>
        </div>
        <div onClick={()=>requestPage(dispatch,'Latest')} className={page==='Latest'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
          <h3>Latest</h3>
        </div>
        <div onClick={()=>requestPage(dispatch,'Views')} className={page==='Views'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
          <h3>Views</h3>
        </div>
        <div onClick={()=>requestPage(dispatch,'Download')} className={page==='Download'?'PrfC_cho_box PrfC_cho_hv prfc_selected':"PrfC_cho_box PrfC_cho_hv"}>
          <h3>Download</h3>
        </div>
      </div>

    </div>
  );
}
