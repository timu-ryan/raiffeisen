import React, { useState } from 'react'
import './IceCreamItem.css'

const IceCreamItem = ({ iceCreamItem }) => {
  
  const {id, title, cost, image} = iceCreamItem;
  
  return (
    <li key={id} className='icecream'>
      <img alt={title} src={image} className='icecream__image'/>
      <div className='icecream__text-container'>
        <h3 className='icecream__title'>{title}</h3>
        <div className='icecream__info'>
          <p className='icecream__price'>Цена: {cost}р</p>
        </div>
      </div>
    </li>
  )
}

export default IceCreamItem