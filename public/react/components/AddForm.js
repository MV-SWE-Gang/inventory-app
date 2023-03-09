import React, { useState, useEffect } from "react";

export const AddForm = ({AddItem, formData, setFormData}) => {



    return(
        <form onSubmit={(e) => {
          e.preventDefault(); 
          AddItem(formData);
        }}>
          
          <input type="text"  onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="number"  onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
          <textarea  onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
          <input type="text" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
          <input type="text"  onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
          
          <button type = "submit">Add</button> 
        </form>
    );
}