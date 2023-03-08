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

	// async function deleteOneItem(idx){
	// 	try {
	// 		console.log(idx)
	// 		const response = await fetch(`${apiURL}/items/${idx + 1}`);
	// 		const itemsData = await response.json();
	// 		setItems([itemsData]);
	// 		setViewAllButton(true)
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }

	useEffect(() => {
		// fetchSauces();
		fetchAllItems()
	}, []);

	return (
		<main>	
      <h1>DEMM App</h1>
			<h2>Keep Track of All DEMM Tings 💯</h2>
			<ItemList items={items} fetchOneItem = {fetchOneItem}  fetchAllItems={fetchAllItems} viewAllButton={viewAllButton} />
		</main>
	)
}