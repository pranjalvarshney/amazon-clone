import React from "react"
import "./subtotal.css"
import { useStateValue } from "../../StateProvider"

export const Subtotal = () => {
  const [{ cart }] = useStateValue()

  const calculateTotal = (cart) => {
    let t = 0
    cart.map((item) => (t = item.price + t))
    return t.toFixed(2)
  }

  return (
    <div className='subtotal'>
      <p className='subtotal-value'>
        Subtotal (<span>{cart.length}</span>) :{" "}
        <strong>$ {calculateTotal(cart)}</strong>
      </p>
      <div className='subtotal-gift'>
        <input type='checkbox' /> <small>This order contains a gift</small>
      </div>
      <button className='subtotal-btn'>Proceed to Buy</button>
    </div>
  )
}
