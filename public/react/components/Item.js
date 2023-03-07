import React from 'react';

export const Item = ({item}) => {

  return <>
    <h3>{item.name}</h3>
    <img src={item.image} alt={item.name} />
    <p>{item.description}</p>
    <p>{item.category}</p>
    <p>{item.price}</p>
  </>
} 
	 