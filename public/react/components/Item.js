import React from 'react';

export const Item = ({item, idx, fetchOneItem, fetchAllItems, viewAllButton}) => {

  

  return( <div className='item-container'>
    {viewAllButton ? null : <button onClick={() => {fetchOneItem(idx)}} >View</button>}
    {viewAllButton ? <button onClick={fetchAllItems}>View All</button> : null}
    <h3>{item.name}</h3>
    <img src={item.image} alt={item.name} style={{maxHeight: "80px", maxWidth: "80px"}}/>
    <p>{item.description}</p>
    <p>{item.category}</p>
    <p>{item.price}</p>
  </div>)
} 
	 