import React, { useState, useEffect } from "react";
import apiURL from "../api";

export const EditForm = ({items, stateIdElm, updateMenu, formData, setFormData}) => {

          useEffect(() => {
            const fetchData = async () => {
              const response = await fetch(`${apiURL}/items/${stateIdElm}`);
              const itemsData = await response.json();
              setFormData({
                name: itemsData.name || "",
                price: itemsData.price || 0,
                description: itemsData.description || "",
                category: itemsData.category || "",
                image: itemsData.image || "",
              });
            };
            fetchData();
          }, [stateIdElm]);

 const { name, price, description, category, image } = formData;

    return(
        <form onSubmit={(e) => {
          e.preventDefault(); 
          updateMenu(formData,stateIdElm);
        }}>
          
          <input type="text" value={name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="number" step="0.01" value={price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
          <textarea value={description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
          <input type="text" value={category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
          <input type="text" value={image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
          
          <button type = "submit">Update</button> 
        </form>
    );
}