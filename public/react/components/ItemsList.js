import React from 'react';
import { Item } from './Item';

<<<<<<< HEAD
export const ItemList = ({items, fetchOneItem, fetchAllItems, deleteOneItem, viewAllButton, updateItem}) => {

	

	return <>
		{
			items.map((item, idx) => {
				return <Item 
					item={item} 
					key={idx} 
					idx={idx} 
					fetchOneItem={fetchOneItem} 
					fetchAllItems={fetchAllItems}
					deleteOneItem={deleteOneItem}
					viewAllButton={viewAllButton} 
				/>
=======
export const ItemsList = ({items}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
>>>>>>> 3b1d4e6d0ffc9d229260311b1bdfe717bfb3cc1b
			})
		}
	</>
} 
