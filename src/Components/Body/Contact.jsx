import React, { Component } from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            FirstName: "",
            LastName: "",
            Telephone: "",
            email: "",
            agree: false,
            contactType: "tel.",
            Message: ""

        }
        this.handleChane = this.handleChane.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChane = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })

    }
    handleClick = (event) => {
        console.log(this.state);
        event.preventDefault();
    }



    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.handleClick}>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail" md={2}>
                                    First Name
                                </Label>
                                <Input
                                    name="FirstName"
                                    placeholder=" First Name"
                                    type="text"
                                    value={this.state.FirstName}
                                    onChange={this.handleChane}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" md={2}>
                                    Last Name
                                </Label>
                                <Input

                                    name="LastName"
                                    placeholder="Last Name"
                                    type="text"
                                    value={this.state.LastName}
                                    onChange={this.handleChane}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" md={2}>
                                    Telephone
                                </Label>
                                <Input
                                    name="Telephone"
                                    placeholder="Telephone"
                                    type="tel"
                                    value={this.state.Telephone}
                                    onChange={this.handleChane}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChane}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" md={2}>
                                    <Input
                                        name="agree"
                                        type="checkbox"
                                        checked={this.state.agree}
                                        onChange={this.handleChane}
                                    />
                                    May We Contact you
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Input type="select" name="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleChane}
                                >

                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">
                                    Message
                                </Label>
                                <Input
                                    name="Message"
                                    placeholder="Message"
                                    type="textarea"
                                    value={this.state.Message}
                                    onChange={this.handleChane}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button type="submit" color="primary">
                        submit
                    </Button>
                </Form>
            </div>
        )
    }

}
export default Contact
