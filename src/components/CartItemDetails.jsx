import { useState } from "react";
import { formatMoney } from "../utils/money";

export function CartItemDetails({ cartItem, deleteCartItem }) {
  const [isUpdate, setIsUpdate]= useState(false);
  const openUpdate =()=>{
    isUpdate ? setIsUpdate(false): setIsUpdate(true)
  }
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
            {isUpdate && <input type="text" style={{width:"50px"}} />}
            {!isUpdate && <span className="quantity-label">{cartItem.quantity}</span>}
          </span>
          <span className="update-quantity-link link-primary" onClick={openUpdate}>Update</span>
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem} >Delete</span>
        </div>
      </div>
    </>
  );
}
