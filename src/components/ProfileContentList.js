import PCItem from "../components/ProfileContentItem"
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { StoreContext } from "../store";

export default function YTList() {
    const { state: { swap: { page }},dispatch } = useContext(StoreContext);
    const { state: { fav: { products,loading } } } = useContext(StoreContext);
    const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#81ff83" }} spin />;
    return (
        <>    
        {loading
            ? (
            <div className="YoutuberList_container spinner-wrap">
                <Spin indicator={antIcon} className="spinner" />
            </div>
            ) : (
            <div className="YoutuberList_container">
                {products.map(product =>(
                    product.category2===page
                    ? <PCItem product={product} key={product.id}/>
                    : page==='All'||(page!=='Mods'&&page!=='Texture'&&page!=='Maps')
                        ? <PCItem product={product} key={product.id}/>
                        : <></>
                ))}
            </div>
            )
        }
        </>
    );
}