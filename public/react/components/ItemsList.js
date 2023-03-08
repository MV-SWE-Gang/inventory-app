import React from 'react';
import { Item } from './Item';

export const ItemList = ({items, fetchOneItem, fetchAllItems, viewAllButton}) => {

	

	return <>
		{
			items.map((item, idx) => {
				return <Item 
					item={item} 
					key={idx} 
					idx={idx} 
					fetchOneItem={fetchOneItem} 
					fetchAllItems={fetchAllItems}
					viewAllButton={viewAllButton} 
				/>
			})
		}
	</>
} 
