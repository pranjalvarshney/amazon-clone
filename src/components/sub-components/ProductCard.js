import React from "react"
import "./productcard.css"
import { useStateValue } from "../../StateProvider"

export const ProductCard = ({ product }) => {
  const [{ cart }, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: product,
    })
  }

  return (
    <div className='product-card' style={{ width: `${product.size * 300}px` }}>
      <div className='product-info'>
        <p>{product.title}</p>
        <p>
          $ <strong>{product.price}</strong>
        </p>
        <div className='product-rating'>
          {Array(product.rating)
            .fill()
            .map((r, index) => {
              return <p key={index}>★</p>
            })}
          <span>({product.rating})</span>
        </div>
      </div>
      <img
        className='product-card-image'
        src={product.image}
        alt='product pic'
      />
      <button onClick={addToCart} className='add-to-cart-btn'>
        Add to cart
      </button>
    </div>
  )
}
