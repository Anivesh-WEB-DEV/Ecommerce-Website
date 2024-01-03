import React from 'react'
import { useSelector } from 'react-redux';

const cardDetails = () => {
    const cardDetail = useSelector((state) => state.cart.cartItems); 
  return (
    <div>
        <h1>Card Details</h1>
      {
      cardDetail.map((e)=>(
        <div className="card_detail">
        <div className="item_image">
          <img src={e.image} alt="item_image" />
        </div>
        <div className="item_title">
            <p>{e.title}</p>
        </div>
        <div className="item_description">
            <p>{e.description}</p>
        </div>
        <div className="item_price">
            <h4>{e.price}</h4>
        </div>
        <div className="item_rating">
            <h5>{e.rating}</h5>
        </div>
        


        </div>
      ))
    }
    </div>
  )
}

export default cardDetails
