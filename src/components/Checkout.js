import React from "react"
import "./checkout.css"
import { Subtotal } from "./sub-components/Subtotal"
import { useStateValue } from "../StateProvider"
import { CheckoutItem } from "./sub-components/CheckoutItem"
import FlipMove from "react-flip-move"

export const Checkout = () => {
  const [{ cart }] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          className='checkout-ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='offer-pic'
        />
        <div className='cart-item-column'>
          <h2 className='shopping-cart-title'>Shopping Cart</h2>
          <FlipMove>
            {cart.length !== 0 ? (
              <>
                {cart.map((item, index) => {
                  return <CheckoutItem key={index} item={item} />
                })}
              </>
            ) : (
              <>
                <h4>Your Shopping Cart is empty.</h4>
                <p>
                  You have items saved to buy later. To buy one or more now,
                  click "Move to cart" next to the item.
                </p>
              </>
            )}
          </FlipMove>
        </div>
      </div>
      <div className='checkout-right'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'
          alt='100'
        />
        <Subtotal />
      </div>
    </div>
  )
}
