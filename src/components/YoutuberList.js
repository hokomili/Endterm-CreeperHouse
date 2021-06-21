import YTItem from "../components/YoutuberItem"
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { StoreContext } from "../store";

export default function YTList() {
    const { state: { page: { products }, requestProducts: { loading } } } = useContext(StoreContext);
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
                        <YTItem product={product} key={product.id}/>
                    ))}
                </div>
                )   
            }
        </>
    );}