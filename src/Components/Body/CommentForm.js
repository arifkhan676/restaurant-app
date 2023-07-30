import React, { Component } from "react";
import { Form, Input } from "reactstrap";

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // console.log(this.state);

        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment)

        this.setState({
            author: '',
            rating: '',
            comment: ''
        });

        e.preventDefault();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder='author name'
                        required
                        onChange={this.handleInputChange}
                    />

                    <Input type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}
                    >
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>

                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="write your feedback"
                        onChange={this.handleInputChange}
                        required
                    />

                    <Input type="submit" />

                </Form>

            </div>
        );
    }


}

export default CommentForm;