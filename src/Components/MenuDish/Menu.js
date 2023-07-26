import React, { Component } from 'react'
import DISHES from './Dish';
import Comments from './Comment';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail'
import { CardGroup, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {

    state = {
        dishes: DISHES,
        seeItem: null,
        comments: Comments,
        modalOpen: false
    }


    ClickItem = (dish) => {
        this.setState({
            seeItem: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        document.title = "Menu"
        const items = this.state.dishes.map((item) => {
            return <MenuItem dish={item} ClickItem={() => this.ClickItem(item)} key={item.id} />;
        })

        let platterDetail = null;

        if (this.state.seeItem != null) {
            const comments = this.state.comments.filter(comment => {
                return comment.dishId === this.state.seeItem.id
            })

            platterDetail = < DishDetail
                dish={this.state.seeItem}
                comments={comments}
            />
        }
        // console.log(platterDetail);


        return (
            <div className='container' >
                <div className="row">

                    <CardGroup>
                        {items}
                    </CardGroup>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal} >
                        <ModalBody>
                            {platterDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                close
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        )
    }
}

export default Menu
