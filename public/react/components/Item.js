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
    <div className='image-container'>
      <img src={item.image} alt={item.name} />
    </div>




    <div className='info-container'>
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <p>{item.price}</p>

      <section className='icon-container'>
        {viewAllButton ? null : <i className="fa-solid fa-magnifying-glass" onClick={() => { fetchOneItem(item.id) }}></i>}
        {viewAllButton ? <div> <p>{item.description}</p><i class="fa-regular fa-square-caret-left" onClick={fetchAllItems}></i> </div>
          : null}
        <i className="fa-solid fa-trash" onClick={() => { deleteOneItem(item.id) }}></i>
      </section>


      {/* {<Form />} */}
    </div>

  </div>)
}
