import React, { Component } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
// import Users  from './User/User';
// import ToDo  from './ToDo/ToDo';
import Posts  from './Post/Posts';
import PostForm  from './Post/PostForm';
import store from './store';


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Contact Dashboard</h1>
          </header>
          {/* <Users/> */}
          {/* <ToDo/> */}
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
