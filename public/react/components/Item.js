import React from 'react';

export const Item = (props) => {

  return <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
    <p>{props.item.description}</p>
    <p>{props.item.category}</p>
    <p>{props.item.price}</p>

  </>
} 
	 