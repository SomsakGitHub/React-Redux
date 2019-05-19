import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault(); //original page

        const name = this.getName.value; 
        const message = this.getMessage.value;
        const data = {
            id: new Date().getTime(),
            name, 
            message,
            editing: false
        }
        
        this.props.dispatch({
            type: 'ADD_COMMENT',
            data
        });

        this.getName.value = "";
        this.getMessage.value = "";

    }
    render(){
        return (
            <div>
                <h1> Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input) => this.getName = input}/>
                    <br/>
                    <br/>
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input) => this.getMessage = input}/>
                    <br/>
                    <br/>
                    <button>Comment</button>
                </form>
            </div>
        );
    }
}

export default connect()(CommentForm);