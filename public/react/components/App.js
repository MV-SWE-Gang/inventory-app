import React, { useState, useEffect } from 'react';
// import { SaucesList } from './SaucesList';
import { ItemList } from './ItemsList';



// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [viewAllButton, setViewAllButton] =  useState(false)



	// async function fetchSauces(){
	// 	try {
	// 		const response = await fetch(`${apiURL}/sauces`);
	// 		const saucesData = await response.json();
			
	// 		setSauces(saucesData);
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }




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

	

	async function fetchOneItem(idx){
		try {
			console.log(idx)
			const response = await fetch(`${apiURL}/items/${idx + 1}`);
			const itemsData = await response.json();
			setItems([itemsData]);
			setViewAllButton(true)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function deleteOneItem(idx){
		try {
			console.log(idx)
			await fetch(`${apiURL}/items/${idx}` , {
				method: 'DELETE'
				}
			);
			console.dir(items)
			fetchAllItems()

		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	// async function addItem(data){
	// 	try {
	// 		await fetch(`${apiURL}/items/` , {
	// 			method: 'POST',
	// 			body: JSON.stringify(data),
	// 			}
				
	// 		);
	// 		fetchAllItems()

	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }

	async function updateItem(idx, data){
		try {
			await fetch(`${apiURL}/items/${idx}` , {
				method: 'PUT',
				body: JSON.stringify(data),
				}
			);
			
			fetchAllItems()

		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemssData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	useEffect(() => {
		// fetchSauces();
		fetchAllItems()
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<ItemList items={items} 
				fetchOneItem = {fetchOneItem}  
				fetchAllItems={fetchAllItems} 
				deleteOneItem={deleteOneItem}
				viewAllButton={viewAllButton} />
		</main>
	)
}