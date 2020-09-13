import React from "react"
import "./checkoutitem.css"
import { useStateValue } from "../../StateProvider"

export const CheckoutItem = ({ item }) => {
  const [{ cart }, dispatch] = useStateValue()

  const removeItemBtn = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: item.id,
    })
  }

  return (
    <div className='checkout-item'>
      <img src={item.image} alt='checkout item' />
      <div className='info-item-cart'>
        <h3>{item.title}</h3>
        <p className='instock-text'>In stock</p>
        <div className='product-rating'>
          {Array(item.rating)
            .fill()
            .map((r, index) => {
              return <p key={index}>★</p>
            })}
          <span>({item.rating})</span>
        </div>
        <h4>${item.price}</h4>
        <button onClick={removeItemBtn} className='remove-from-cart-btn'>
          Remove item
        </button>
      </div>
    </div>
  )
}
