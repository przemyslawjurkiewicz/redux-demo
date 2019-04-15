import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Form.css';
import {
    addComment,
    updateComment
} from './actions.js';


const mapDispatchToProps = (dispatch) => {
    return {
        addComment: text => dispatch(addComment(text)),
        updateComment: (id, text) => dispatch(updateComment(id, text))
    }
};

const mapStateToProps = state => ({
    comments: state.comments,
    form: state.form
});

class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            id: ''
        };
    }

    componentWillReceiveProps(e) {
        this.setState({
            text: e.form.text,
            id: e.form.id
        })
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.state.text);
        this.setState({ text: '' });
    }

    handleUpdate(event) {
        
        event.preventDefault();
        this.props.updateComment(
            this.state.id, this.state.text
        );
    }

    clear(event) {
        this.setState({
            text: ''
        })
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className='Form'>
                <div>
                    <textarea
                        rows='7'
                        value={this.state.text}
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div>
                    <button type='submit'>Add comment</button>
                    <button
                        onClick={(e) => this.handleUpdate(e)}> Edit comment </button>
                    <button
                        onClick={(e) => this.clear(e)}> Clear </button>
                </div>
            </form>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);