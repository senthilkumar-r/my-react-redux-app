import React, {Component} from 'react';
import './User.css';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    componentWillMount() {
        console.log('componentWillMount');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({users: data}))
    }
    render(){
        const userList = this.state.users.map(user => (
            <div key={user.id} className="card">
            <h1>{user.name}</h1>
           
            </div>
        ));
        return (
           <div>{userList}</div>
        )
    }
}
export default Users;