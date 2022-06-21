import React, { Component } from 'react';
import './App.css';
import AddItemPage from "./Componants/AddItems/AddItem";
import TodoItemPage from "./Componants/TodoItems/TodoItem";


class App extends Component {

  state = {
    items: [
      {id:1,name:"Mohamed",age:23},
      {id:2,name:"Youssef",age:25},
      {id:3,name:"Mustafa",age:27},
    ]
  }

  deleteItem = (id) => {
    let _items = this.state.items;
    let _i = _items.findIndex(_item=> _item.id === id);
    _items.splice(_i,1); 
    this.setState({itmes:_items});
  }

  
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="App">
         <TodoItemPage item={this.state.items} deleteItem={this.deleteItem}/>

          <AddItemPage />
      </div>
    );
  }
}

export default App;
