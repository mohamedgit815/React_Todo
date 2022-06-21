import React from "react";
import "./TodoItem.css";

export default function TodoItemPage(props) {
    const {item , deleteItem} = props;
    const ItemList = !item.length ? <p>No Data Now</p> : item.map((items)=>{
        return(
            <div key={items.id}>
                <span>{items.name}</span>
                <span>{items.age}</span>
                <span onClick={()=>deleteItem(items.id)}>&times;</span>
            </div>
        );
    });

    return (
        <div className="ListItems">

            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>

            {ItemList}
        </div>
    );
}
