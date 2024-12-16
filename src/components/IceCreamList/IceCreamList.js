import React, { useState } from 'react'
import './IceCreamList.css'
import IceCreamItem from '../IceCreamItem/IceCreamItem'

const IceCreamList = ({list, setPrice, setNumber}) => {

  const [isSorted, setIsSorted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  function handleInputChange(e) {
    setInputValue(e.target.value)
  }
  
  return (
    <>
      <label htmlFor="icecream" className='input-label'>введите название:</label>
      <input id='icecream' type='text' value={inputValue} onChange={handleInputChange} className='input'/>
      <button className="button" onClick={() => {setIsSorted(!isSorted)}}>Отсортировать по стоимости</button>
      <ul className='icecream-list'>
        {!isSorted 
          ? list.filter(item => {
              return item.title.toLowerCase().includes(inputValue.toLowerCase())
                }).map(item => {
                  const {id, title, image, cost} = item;
                  const iceCreamItem = {id, title, image, cost};
                  return (
                    <IceCreamItem 
                      iceCreamItem={iceCreamItem}
                    />)
                }) 
          : list.sort((a, b) => a.cost - b.cost).filter(item => {
              return item.title.toLowerCase().includes(inputValue.toLowerCase())
                }).map(item => {
                  const {id, title, image, cost} = item;
                  const iceCreamItem = {id, title, image, cost};
                  return (
                    <IceCreamItem 
                      iceCreamItem={iceCreamItem}
                    />)
                }) 
        } 
      </ul>
    </>
  )
}

export default IceCreamList