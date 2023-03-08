import React, { useState, useEffect } from 'react';
// import { SaucesList } from './SaucesList';
import { ItemList } from './ItemsList';



// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

<<<<<<< HEAD
	const [items, setItems] = useState([]);
	const [viewAllButton, setViewAllButton] =  useState(false)
=======
	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);

>>>>>>> 3b1d4e6d0ffc9d229260311b1bdfe717bfb3cc1b



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
<<<<<<< HEAD
		// fetchSauces();
		fetchAllItems()
=======
		fetchSauces();
		fetchItems()
>>>>>>> 3b1d4e6d0ffc9d229260311b1bdfe717bfb3cc1b
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
<<<<<<< HEAD
			<ItemList items={items} 
				fetchOneItem = {fetchOneItem}  
				fetchAllItems={fetchAllItems} 
				deleteOneItem={deleteOneItem}
				viewAllButton={viewAllButton} />
=======
 			<SaucesList sauces={sauces} />
			<ItemsList items={items} />

>>>>>>> 3b1d4e6d0ffc9d229260311b1bdfe717bfb3cc1b
		</main>
	)
}