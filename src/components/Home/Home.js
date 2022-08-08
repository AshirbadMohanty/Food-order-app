import { React, useEffect, useState } from "react";
import Orderone from "../order/Orderone";
import "./Home.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Changelang from "../Changelangmodal/Changelang";
import Language from "../../image/language.png";

const Home = () => {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState({});
  const [subData, setSubData] = useState([]);
  const [subMainData, setSubMainData] = useState({});
  const [showProducts, setShowProducts] = useState([]);
  const [showProductData, setShowProductData] = useState(false);
  const [productMain, setProductMain] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [showChangeLang,setShowChangeLang]=useState(false);
  const products = useSelector(
    (state) => state.productData && state.productData.products
  );
  const categories = useSelector(
    (state) => state.data && state.data.categories
  );
  const basket = useSelector((state) => state.basket);
  const history = useHistory();
  useEffect(() => {
    setData(categories.filter((item) => item.parent == null));
    setSubData(categories.filter((item) => item.parent == 1));
  }, []);

  function handleData(id) {
    setSubData(categories?.filter((item) => item.parent == id));
    setMainData(categories?.find((item) => item.id == id));
  }
  function handleSubData(id) {
    setSubMainData(categories?.find((category) => category.id == id));
    setShowProducts(products.filter((product) => product.parentId == id));
  }
  useEffect(() => {
    setShowProducts(products.filter((item) => item.parentId == subData[0]?.id));
    setSubMainData(subData[0]);
  }, [subData]);

  useEffect(() => {
    setSubMainData(mainData[0]);
  }, [mainData]);

  function handleClick(item) {
    setShowProductData(true);
    setProductMain(item);
  }
  function handleBasket() {
    history.push("/basket");
  }
  useEffect(() => {
    const Price = basket.products.reduce((acu, curr) => {
      return acu + parseFloat(curr.totalPrice);
    }, 0);
    setTotalPrice(Price);
  }, [basket]);

  return (
    <div className="Home">
     
      <div className="main">
        <div className="title">
          <h1>King Arms Cardington</h1>
          <p>134 High Street, Kempston, Bedford, Bedfordshire, MK42 7BN</p>
          <div>
        
          </div>
        </div>
        <div className="firstitems">
          {data.map((item) => (
            <button
              key={item.id}
              className={mainData?.id == item.id ? "button active" : "button"}
              onClick={() => handleData(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="home">
          {subData?.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSubData(item.id)}
              className={
                subMainData?.id == item.id ? "underline active" : "underline"
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <br></br>

      <div
        className={
          basket.products.length == 0 ? "homeproductlist" : "productlist"
        }
      >
        <div className="test">
          {showProducts?.map((item) => (
            <div
              className="product"
              key={item.id}
              onClick={() => handleClick(item)}
              setShowProductData={setShowProductData}
              setProductMain={setProductMain}
            >
              <div className="prodesc">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
              <div className="proprice">£{item.price}</div>
            </div>
          ))}
        </div>
      </div>
      {basket.products.length == 0 ? (
        <></>
      ) : (

        <div className="bottom" onClick={handleBasket}>
          <h1>VIEW BASKET</h1>
          <h1>
            £{totalPrice.toFixed(2)} / {basket.products.length} ITEM
          </h1>
        </div>
      )}
    
      {showProductData && (
        <Orderone
          setShowProductData={setShowProductData}
          productMain={productMain}
        />
      )}
    
      <div
            className="lang-btn button"
            onClick={() => setShowChangeLang(!showChangeLang)}
          >
            <img
              className="images__h"
              src={Language}
              alt="language"
            />
          </div>
     <Changelang
      setShowChangeLang={setShowChangeLang}
      showChangeLang={showChangeLang}
      />
    </div>
  );
};

export default Home;
