import React, { useState } from 'react'
import './IceCreamList.css'
import IceCreamItem from '../IceCreamItem/IceCreamItem'

const IceCreamList = ({list, setPrice, setNumber}) => {

  const [visibleNumber, setVisibleNumber] = useState(10);
  const [inputValue, setInputValue] = useState('');
  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function addMoreClick() {
    setVisibleNumber(visibleNumber => visibleNumber+=2)
  }
  
  return (
    <>
      <label htmlFor="icecream" className='input-label'>введите название:</label>
      <input id='icecream' type='text' value={inputValue} onChange={handleInputChange} className='input'/>
      <ul className='icecream-list'>
        {list.filter(item => {
          return item.title.toLowerCase().includes(inputValue.toLowerCase())
        }).map(item => {
          const {id, title, image, cost} = item;
          const iceCreamItem = {id, title, image, cost};
          return (
            <IceCreamItem 
              iceCreamItem={iceCreamItem}
            />)
        })} 
      </ul>
    </>
  )
}

export default IceCreamList