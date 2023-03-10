import React, { useState, useEffect } from 'react';
// import { SaucesList } from './SaucesList';
import { ItemList } from './ItemsList';
import { EditForm } from './EditForm';
import { AddForm } from './AddForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';


export const App = () => {


	const [items, setItems] = useState([]);
	const [viewAllButton, setViewAllButton] =  useState(false)
	const [editButton, setEditButton] = useState(false)
	const [addButton, setAddButton] = useState(false)
	const [stateIdElm, setStateIdElm] = useState('')
	const [formData, setFormData] = useState({
		name: "",
		price: 0,
		description: "",
		category: "",
		image: "",
	        });



	async function fetchAllItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
			setViewAllButton(false)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	
	async function fetchOneItem(idElm){
		try {
			const response = await fetch(`${apiURL}/items/${idElm}`);
			const itemsData = await response.json();
			setItems([itemsData]);
			setViewAllButton(true)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function deleteOneItem(idElm){
		try {
			await fetch(`${apiURL}/items/${idElm}` , {
				method: 'DELETE'
				}
			);
			fetchAllItems()

		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function updateMenu(data, idElm){
		try {
			const response = await fetch(`${apiURL}/items/${idElm}` , {
				method: 'PUT',
				mode: 'cors',
				headers: {
					"Content-Type": "application/json",
				        },
				body: JSON.stringify(data),
				}
			);
			console.log(response)
			setEditButton(false)
			fetchOneItem(idElm)
			setFormData({
				name: "",
				price: 0,
				description: "",
				category: "",
				image: "",
			        })
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const handleUpdate = (idElm) => {
		setEditButton(true)
		setStateIdElm(idElm)
	      }

	async function AddItem(data){
		try {
			const response = await fetch(`${apiURL}/items/` , {
				method: 'POST',
				mode: 'cors',
				headers: {
					"Content-Type": "application/json",
				        },
				body: JSON.stringify(data),
				}
			);
			console.log(response)
			setAddButton(false)
			fetchAllItems()
			setFormData({
				name: "",
				price: 0,
				description: "",
				category: "",
				image: "",
			        })
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	


	useEffect(() => {
		fetchAllItems()
	}, []);

	return (
		<>	
		<h1>DEMM App</h1>
		<h2>Keep Track of All DEMM Tings 💯</h2>
		<div>

		
			{addButton ? (
				<AddForm 
				AddItem={AddItem}
				formData={formData}
				setFormData={setFormData}
				/> 
			) : editButton ? (
				<EditForm 
					items={items}
					stateIdElm={stateIdElm}
					updateMenu={updateMenu}
					formData={formData}
					setFormData={setFormData}
				/>
			) : (
				<main>	
				<ItemList 
					items={items} 
					fetchOneItem = {fetchOneItem}  
					fetchAllItems={fetchAllItems} 
					deleteOneItem={deleteOneItem}
					handleUpdate={handleUpdate}
					viewAllButton={viewAllButton} 
				/>
				</main>
			)}
		
		</div>
		<footer>
			{!addButton && !editButton ? <i class="fa-solid fa-circle-plus" id='add' onClick={() => {setAddButton(true)}}> Add </i> : <i class="fa-solid fa-circle-plus" onClick={() => {setEditButton(false); setAddButton(false)}}> Back </i>}
		</footer>
		</>
	)
}
