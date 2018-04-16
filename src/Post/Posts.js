import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthposts } from '../actions/postActions';

class Posts extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }
    componentWillMount() {
        console.log('componentWillMount');
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(data => this.setState({posts: data}))
        this.props.fecthposts();
    }
    render(){
        const postList = this.state.posts.map(post => (
            <div key={post.id} className="card">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ));
        return (
           <div>{postList}</div>
        )
    }
}
export default connect(null, { fecthposts })(Posts);