import React from 'react'

const Card = (props) => {
  return (
    <div className='product-card'>

        <img src={props.img} alt="" />

        <h1 className='text'>{props.user}</h1>

        <p className='text'>{props.para}</p>
        <button>Buy Now</button>
      
    </div>
  )
}

export default Card
