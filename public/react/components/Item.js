import React from 'react';
import { EditForm } from './EditForm'

export const Item = ({ 
  item,
  idElm,
  fetchOneItem,
  fetchAllItems,
  deleteOneItem,
  handleUpdate,
  viewAllButton,
}) => {

  return (<div className='item-container'>
    {viewAllButton ? null : <button onClick={() => { fetchOneItem(item.id) }} >View</button>}
    {viewAllButton ? <button onClick={fetchAllItems}>View All</button> : null}
    <h3>{item.name}</h3>
    <img src={item.image} alt={item.name} style={{ maxHeight: "80px", maxWidth: "80px" }} />
    <p>{item.description}</p>
    <p>{item.category}</p>
    <p>{`£${item.price}`}</p>
    {viewAllButton ? <button onClick={() => { deleteOneItem(item.id) }}> Delete </button> : null}
    {viewAllButton ? <button onClick={(e) => { handleUpdate(item.id) }}> Edit </button> : null}

  </div>)
}
