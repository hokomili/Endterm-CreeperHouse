import { Carousel } from "antd";
import { Link } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";


export default function ProductHeader({title}) {
  return (
    <div className="ProductHeader_container">
      <div className="PrfC_a1">
        <div className="PrfC_title">
          <h3>{title}</h3>
        </div>
        <div className="PHC_line"></div>
      </div>
      <div className="PHC_a2">
        <div className="PHC_Carousel">
          <Carousel autoplay>
            <Link to="">
              <h3 className="PHC_Carousel_img">1</h3>
            </Link>
            <Link to="">
              <h3 className="PHC_Carousel_img">2</h3>
            </Link>
            <Link to="">
              <h3 className="PHC_Carousel_img">3</h3>
            </Link>
            <Link to="">
              <h3 className="PHC_Carousel_img">4</h3>
            </Link>
          </Carousel>
        </div>
      </div>
      <ProductNavbar/>
    </div>
  );
}
