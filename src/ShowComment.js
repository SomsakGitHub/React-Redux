import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import EditComponent from './EditComponent';

class ShowComment extends Component {
    render(){
        return (
            <div>
                <h1> Show all Comment</h1>
                {this.props.comments.map((comment) => (
                    <div key={comment.id}>
                        {comment.editing ? <EditComponent key={comment.id} comment={comment} /> :
                        <Comment key={comment.id} comment={comment}/>}
                    </div>
                ))}
                {console.log('store', this.props.comments)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state
    }
}

export default connect(mapStateToProps)(ShowComment);