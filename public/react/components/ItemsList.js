import React from 'react';
import { Item } from './Item';

export const ItemList = ({items, fetchOneItem, viewAllButton}) => {

	

	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} idx={idx} fetchOneItem={fetchOneItem} viewAllButton={viewAllButton} />
			})
		}
	</>
} 
