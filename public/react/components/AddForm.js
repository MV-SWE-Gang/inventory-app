import React, { useState, useEffect } from "react";

export const AddForm = ({AddItem, formData, setFormData}) => {



    return(
        <form onSubmit={(e) => {
          e.preventDefault(); 
          AddItem(formData);
        }}>
          
          <input type="text" placeholder="Item name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="number" step="0.01" placeholder="Price of item" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
          <textarea placeholder="Description of item" onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
          <input type="text" placeholder="Category" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
          <input type="text" placeholder="Image link" onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
          
          <button type = "submit" id="invisible">
            <i class="fa-solid fa-circle-plus" id='add-button'> Add </i>
          </button> 
        </form>
    );
}