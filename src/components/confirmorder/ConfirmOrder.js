import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import viewType from "../actions/index";
import "./ConfirmOrder.css";
import PropTypes from "prop-types";

function ConfirmOrder({ showConfirmModal, setShowConfirmModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function handlePlaceOrder() {
    dispatch(viewType.Basket.clearBasket());
    history.push("/");
  }

  return (
    <>
      <div
        className={showConfirmModal ? "cmodal animated__cmodal" : "cmodal"}
      ></div>
      <div
        className={
          showConfirmModal
            ? "cmodal__content animated__cmodal__content"
            : "cmodal__content"
        }
      >
        <div className="cmodal__content__name">
          <h1>Conform Order</h1>
          <img
            src="https://c.tenor.com/HCJnS_GSJk4AAAAi/like-gif.gif"
            alt="like"
          />
          <h3>
            by placing this order you agree that you are present in kings arms
            and over 18 years old.
          </h3>

          <div className="cmodal__content__name__buttons">
            <button
              className="button"
              onClick={() => setShowConfirmModal(false)}
            >
              CANCLE
            </button>
            <button className="button  active" onClick={handlePlaceOrder}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ConfirmOrder.propTypes = {
  showConfirmModal: PropTypes.bool,
  setShowConfirmModal: PropTypes.func,
};

export default ConfirmOrder;
