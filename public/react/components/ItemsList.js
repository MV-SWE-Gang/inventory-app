import React from "react";
import { Item } from "./Item";

export const ItemList = ({
  items,
  fetchOneItem,
  fetchAllItems,
  deleteOneItem,
  viewAllButton,
  handleUpdate,
  updateItem,
}) => {
  return (
    <>
      {items.map((item, idElm) => {
        return (
          <Item
            item={item}
            key={idElm}
            idElm={idElm}
            fetchOneItem={fetchOneItem}
            fetchAllItems={fetchAllItems}
            deleteOneItem={deleteOneItem}
            handleUpdate={handleUpdate}
            viewAllButton={viewAllButton}
          />
        );
      })}
    </>
  );
};
