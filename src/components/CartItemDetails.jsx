import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../utils/money";
import "./CartItemDetails.css";

export function CartItemDetails({ cartItem, deleteCartItem, loadCart }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const openUpdate = async () => {
    if (isUpdate) {
      setIsUpdate(false);

      if (quantity == 0) {
        deleteCartItem();
        return 0;
      }

      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        productId: cartItem.productId,
        quantity: Number(quantity),
      });
    } else {
      setIsUpdate(true);
    }
    loadCart();
  };

  const handelEnter = (event) =>{
    event.key === "Enter" && openUpdate()
  };

  const getQuantity = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {isUpdate && (
              <input
                type="number"
                style={{
                  width: "50px",
                  appearance: "textfield",
                  WebkitAppearance: "textfield",
                  MozAppearance: "textfield",
                }}
                value={quantity}
                onChange={getQuantity}
                onKeyDown={handelEnter}
                autoFocus
              />
            )}
            {!isUpdate && (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={openUpdate}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
