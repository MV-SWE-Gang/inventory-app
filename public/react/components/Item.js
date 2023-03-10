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

  return (<div className='item-container' style={viewAllButton ? {minWidth: '100%'} : null}>
    <div className='image-container'>
      <img src={item.image} alt={item.name} />
    </div>




    <div className='info-container' >
      <h3>{item.name}</h3>
      <h7>Category: {item.category}</h7>
      <p>{`£${item.price}`}</p>

      <section className='icon-container'>
        {viewAllButton ? null : <i className="fa-solid fa-magnifying-glass" onClick={() => { fetchOneItem(item.id) }}></i>}
        {viewAllButton ? <div> <p>{item.description}</p></div>
          : null}
        {viewAllButton ? <i class="fa-regular fa-square-caret-left" onClick={fetchAllItems}></i> : null}
        {viewAllButton ? <i className="fa-solid fa-pencil"  onClick={() => { handleUpdate(item.id) }}></i> : null}
        {viewAllButton ? <i className="fa-solid fa-trash" onClick={() => { deleteOneItem(item.id) }}></i> : null}
      </section>


      {/* {<Form />} */}
    </div>

  </div>)
}
