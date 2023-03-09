import React from 'react';
import { Item } from './Item';

export const ItemList = ({items,
			fetchOneItem,
			fetchAllItems,
			deleteOneItem,
			viewAllButton, 
			handleUpdate,
			updateItem}) => {

	

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
					handleUpdate={handleUpdate}
					viewAllButton={viewAllButton} 
				/>
			})
		}
	</>
} 
