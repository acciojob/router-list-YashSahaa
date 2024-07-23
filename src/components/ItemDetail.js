
import React from "react";
import './../styles/App.css';
import { Link } from "react-router-dom";

const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
];
const ItemDetails = () => {
  
  return (
    <div>
        <h1>Item List</h1>
        <ul>
          {items.map((item)=>{
            return(
              <li key={item.id}>
                <Link to={`/items/${item.id}`}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default ItemDetails;
