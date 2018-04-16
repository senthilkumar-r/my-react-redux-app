import { FETCH_POSTS, NEW_POSTS} from './types';

//same as below 
// export function fetchPosts(){
//     return function(dispatch){
//         console.log('componentWillMount');
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }))
//     }
// }

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
        })
    )
}