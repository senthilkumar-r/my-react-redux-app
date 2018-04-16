import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }
    componentWillMount() {
        console.log('componentWillMount');
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => this.setState({todos: data}))

    }
    handleCheck(ele) {
        console.log('clicked');
    }
    render(){
        const todoList = this.state.todos.map(todo => (
            <div key={todo.id} className="card">
               <h1>{todo.title}</h1>
               <input type="checkbox" checked={todo.completed} onChange={this.handleCheck}/>
            </div>
        ));
        return (
            <div>{todoList}</div>
        )
    }
}
export default ToDo;