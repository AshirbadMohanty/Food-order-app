import React, { useEffect, useState } from "react";
import ConfirmOrder from "../confirmorder/ConfirmOrder";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import More from "../../image/more.png";
import LeftArrow from "../../image/left-arrow.png";
import "./Basket.css";
import PropTypes from "prop-types";

function Basket() {
  const basket = useSelector((state) => state.basket.products);
  const categories = useSelector(
    (state) => state.data && state.data.categories
  );
  const history = useHistory();
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
  }, []);

  const [totalBasketPrice, setTotalBasketPrice] = useState(0);
  useEffect(() => {
    const tBasketPrice = basket.reduce((acu, curr) => {
      return acu + parseFloat(curr.totalPrice);
    }, 0);
    setTotalBasketPrice(tBasketPrice);
  }, [basket]);

  const [mainCategories, setMainCategories] = useState([]);
  useEffect(() => {
    setMainCategories(categories.filter((category) => category.parent == null));
  }, []);

  function handleBackButton() {
    history.push("/");
  }

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [fProducts, setFProducts] = useState([]);
  useEffect(() => {
    const filterProd = [];
    mainCategories?.map(
      (category) =>
        (filterProd[category.name] = {
          products: basket?.filter(
            (product) => product.category == category.name
          ),
        })
    );
    setFProducts(filterProd);
  }, [mainCategories]);

  return (
    <div className="basket">
      <div className="header">
        <img
          className="images"
          src={LeftArrow}
          alt="LeftArrow"
          onClick={handleBackButton}
        />
        <h1 className="h1">checkout</h1>
        <img className="images" src={More} alt="More" />
      </div>

      <div className="top">
        <div className="basket-top__desc">
          <h1 className="h2">Kempston Hammers Sports & Social Club</h1>
          <p className="p1">
            134 High Street, Kempston, Bedford, Bedfordshire, MK42 7BN
          </p>
        </div>

        {basket.length == 0 ? (

          <div className="nobasket">
            <h4> NO PRODUCT IN YOUR BASKET</h4>
          </div>

        ):(
          <>
          <div className="list">
          {Object.keys(fProducts).map((category, index) => (
            <div key={index}>
              {fProducts[category].products.length !== 0 && (
                <h1 className="category-cap">
                  {category.toLowerCase()} (
                  {fProducts[category].products.reduce((acc, cur) => {
                    return acc + cur.qty;
                  }, 0)}
                  )
                </h1>
              )}
              {fProducts[category].products.map((product) => {
                return (
                  <div className="basket-top__list-item" key={product.id}>
                    <div className="basket-top__list-item__left">
                      <h1 className="h3">
                        {product.qty} x {product.name}
                      </h1>
                      <p className="p2">
                        {product.variant == "" ? "Half Pint" : product.variant}
                        {""}
                        {product.extras.map((extra, index) => (
                          <span key={index}>, {extra.name} </span>
                        ))}
                      </p>
                    </div>
                    <div className="basket-top__list-item__right">
                      <h1 className="h4">£{product.totalPrice.toFixed(2)}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <hr className="hr" />
        </>
        )}
        
       {basket.length == 0 ? (
          <div className="basket-top__addnotes"></div>
        ) : (
          <>
            <div className="basket-top__addnotes">
              <label htmlFor="addnote">Add notes</label>
              <textarea name="addnote" id="addnote"></textarea>
            </div>
            <hr className="hr" />
          </>
        )}

        
      </div>

      {basket.length == 0 ? (
        <div className="basket-middle"></div>
      ) : (
        <div className="basket-middle">
          <h1>
            Table Number{" "}
            <span className="basket-middle-number">{randomNumber}</span>
          </h1>
        </div>
      )}

      {basket.length == 0 ? (
        <div className="basket-bottom" onClick={handleBackButton}>
          <h3>Go Back</h3>
        </div>
      ) : (
        <div
          className="basket-bottom"
          onClick={() => setShowConfirmModal(true)}
        >
          <h1>CONFIRM ORDER</h1>
          <h1>
          £{totalBasketPrice.toFixed(2)} / {basket.length} ITEM
        </h1>
        </div>
      )}
      <ConfirmOrder
        showConfirmModal={showConfirmModal}
        setShowConfirmModal={setShowConfirmModal}
      />
      
    </div>
  );
}

Basket.propTypes = {
  showChangeLangModal: PropTypes.bool,
  setShowChangeLangModal: PropTypes.func,
};

export default Basket;
