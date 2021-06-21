import { Carousel } from "antd";
import { Link } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";
import { useContext } from "react";
import { StoreContext } from "../store";


export default function ProductHeader({title}) {
  const { state: { page: { products }, requestProducts: { loading } } } = useContext(StoreContext);
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
          
        {!loading&&products[8]
              ?(
                  <Carousel autoplay>
                  <Link to={'/products/'+products[2].category2+'/'+products[2].id}>
                  <img className="H_Carousel_img" src={products[2].image} key={products[2].id} alt="" />
                  </Link>
                  <Link to={'/products/'+products[4].category2+'/'+products[4].id}>
                  <img className="H_Carousel_img" src={products[4].image} key={products[4].id} alt="" />
                  </Link>
                  <Link to={'/products/'+products[6].category2+'/'+products[6].id}>
                  <img className="H_Carousel_img" src={products[6].image} key={products[6].id} alt="" />
                  </Link>
                  <Link to={'/products/'+products[8].category2+'/'+products[8].id}>
                  <img className="H_Carousel_img" src={products[8].image} key={products[8].id} alt="" />
                  </Link>
                  </Carousel>
                ) : (
                  <Carousel autoplay>
                  <Link to="">
                    <h3 className="H_Carousel_img">1</h3>
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
              )
            }
        </div>
      </div>
      <ProductNavbar/>
    </div>
  );
}
