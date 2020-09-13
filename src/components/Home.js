import React from "react"
import "./home.css"
import { ProductCard } from "./sub-components/ProductCard"

const data = [
  {
    title:
      "HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (8GB/1TB HDD/M.2 Slot/Windows",
    price: 749.99,
    rating: 4,
    size: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg",
  },
  {
    title:
      "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    size: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
  },
  {
    title:
      "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    price: 239.29,
    rating: 4,
    size: 2,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
  },
  {
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 2.99,
    rating: 4,
    size: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
  },
  {
    title:
      "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 98.99,
    rating: 5,
    size: 2,
    image:
      "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
  },
  {
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 5,
    size: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
  {
    title:
      "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    price: 1094.98,
    rating: 4,
    size: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
  },
]

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-bg-image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/1500x600_Hero-Tall_p._CB404993995_.jpg'
          alt='home bg'
        />
        <div className='home-row'>
          {data.map((product, index) => {
            return <ProductCard key={index} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}
