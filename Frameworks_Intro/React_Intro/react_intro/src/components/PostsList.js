import React from 'react';
import axios from 'axios';
import Post from './Post';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: [],
            some: ''
        }

        this.getPosts();
    }

    getPosts() {
        axios.get('https://dog.ceo/api/breeds/image/random').then((data) => {
            this.setState({posts: data.data});
        });
    }

    render() { return (
        <div className="postListBlock">
            <h2>That's an awesome DOG below!</h2>
            <p style={{textAlign: 'center'}}><strong>Reload</strong> to see a new one</p>
            <Post post={this.state.posts} ></Post>
        </div>
    );}
}

export default PostList;
