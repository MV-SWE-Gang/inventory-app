import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    image: ""
  });



  return (
    <form onSubmit={handleSubmit}>

      <input type="text" value={name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="number" value={price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
      <textarea value={description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
      <input type="text" value={category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
      <input type="text" value={image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />

      <button type="submit" onSubmit={handleSubmit}>Update</button>
    </form>
  );
}