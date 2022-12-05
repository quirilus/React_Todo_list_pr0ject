import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

export default class App extends Component {
    //state initialization.
    state = {
        items: [],
        id: 0,
        item: '',
        editItem: false,
    }

    handleChange = (e)=> { // managing state.
        this.setState({
            item: e.target.value

        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); //prevent the auto-refresh of the form on submit.
        const newItem ={
            id: this.state.id,
            item: this.state.item
        }

        //console.log(newItem);

        const updatedItems = [...this.state.items,newItem];
        this.setState({
            items:updatedItems,
            id: this.state.id + 11111,
            item: '',
            editItem: false
        })

    }
    clearList =()=>{
        this.setState({
            items:[]
            
        })
    }

    // delete icon
    handleDelete = (id)=>{
        //filter function..filter one item from another

        const sortedItems = this.state.items.filter(item => item.id !== id);
            this.setState({
                items: sortedItems
            })
    }
    //pencil icon
    handleEdit =(id) =>{
        const filterItems = this.state.items.filter(item => item.id !== id);

        const selectedItem = this.state.items.find(item =>item.id === id);

        //console.log( selectedItem);
            this.setState({
                items: filterItems,
                item:  selectedItem.item,
                editItem: true,
                id: id
            })

    }

render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-10 mx-auto col-md-8 mt-4'>
                <h3 className='text-capitalize text-center'>
                    todo input
                    </h3>
                <TodoInput  item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit} 
                            editItem ={this.state.editItem}
                />

                <TodoList items={this.state.items} 
                    handleDelete={this.handleDelete} 
                    clearList={this.clearList} 
                    handleEdit={this.handleEdit}

                />

            </div>

        </div> 
      </div>
    )
  };
}

