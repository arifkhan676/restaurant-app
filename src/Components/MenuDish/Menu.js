import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { Modal, ModalBody, ModalFooter, CardColumns, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as ActionCreator from '../Redux/ActionCreator'
import { fetchDishes } from '../Redux/ActionCreator';
import Loading from '../Body/Loading';

const mapStateToProps = state => {
    // console.log(state);
    return {
        dishes: state.dish,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) =>
            dispatch(ActionCreator.addComment(dishId, author, rating, comment)),
        fetchDishes: () => dispatch(fetchDishes())

    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        document.title = "Menu";

        if (this.props.dishes.isLoading) {
            return <Loading />

        } else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)}
                    />
                );
            })


            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id
                )
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment}
                />
            }
            return (
                <div className="container">

                    <CardColumns>
                        {menu}

                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            );
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);