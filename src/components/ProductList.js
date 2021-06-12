import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";


export default function ProductList() {
    return (
        <div className="ProductList_container">
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
            <Link to="/ProductPage"><ProductItem/></Link>
        </div>
    );}
  