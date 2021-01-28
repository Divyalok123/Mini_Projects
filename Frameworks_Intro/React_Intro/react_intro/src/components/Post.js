import React from 'react';

function Post(props) {
    let postStyle = {
        width: '350px',
        height: '300px',
        boxShadow: '0px 0px 2px 2px grey',
        borderRadius: '10%',
        marginBottom: '10px'
    }

    return (
        <img src={props.post.message} className="postItem" style={postStyle} alt="Dog" />
    );
}

export default Post;
