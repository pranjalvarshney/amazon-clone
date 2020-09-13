import React from "react"
import "./header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone"
import { Link } from "react-router-dom"
import { useStateValue } from "../../StateProvider"

export const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const handleSignout = (e) => {
    dispatch({
      type: "SIGN_OUT",
      user: null,
    })
  }
  return (
    <div className='header'>
      <div className='header-logo'>
        <Link to='/' className='link-style'>
          <img
            className='header-logo-img'
            src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
            alt='amazon-logo'
          />
        </Link>
      </div>
      <div className='header-search'>
        <input placeholder='search here...' />
        <SearchIcon className='header-search-icon' />
      </div>
      <div className='header-nav'>
        <Link to={!user && `/signin`} className='link-style'>
          <div className='header-nav-option' onClick={handleSignout}>
            <span className='header-nav-option-line-1'>Hello, Guest</span>
            <span className='header-nav-option-line-2'>
              {user ? "Signout" : "Signin"}
            </span>
          </div>
        </Link>
        <div className='header-nav-option'>
          <span className='header-nav-option-line-1'>Returns & </span>
          <span className='header-nav-option-line-2'>Orders</span>
        </div>
        <div className='header-nav-option'>
          <span className='header-nav-option-line-1'>Your</span>
          <span className='header-nav-option-line-2'>Prime</span>
        </div>
        <Link to='/checkout' className='link-style'>
          <div className='header-nav-option-cart'>
            <ShoppingCartTwoToneIcon className='header-cart-icon' />
            <div className='header-cart-div'>
              <span className='header-nav-option-cart-value'>
                {cart?.length}
              </span>
              <span className='header-nav-option-line-2'>Cart</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
