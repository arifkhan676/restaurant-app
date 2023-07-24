import React, { Component, useState } from 'react'
import DISHES from './Dish';
import Comments from './Comment';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail'
import { Card, CardGroup, Modal, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            seeItem: null,
            comments: Comments,
            modalOpen: false
        }
    }

    ClickItem = (Platter) => {
        this.setState({
            seeItem: Platter,
            modalOpen: !this.state.modalOpen
        })
    }

    toggle = () => {
        this.setState = ({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const items = this.state.dishes.map((item) => {
            return <MenuItem Platter={item} ClickItem={() => this.ClickItem(item)} key={item.id} />;
        })


        let platterDetail = null;

        if (this.state.seeItem != null) {
            const comments = this.state.comments.filter(comment =>
                comment.dishId === this.state.seeItem.id)
            platterDetail = < DishDetail
                passItem={this.state.seeItem}
                comments={comments}
            />
        }
        console.log(platterDetail);


        return (
            <div className='container' >
                <div className="row">
                    <CardGroup>
                        <Card onClick={this.toggle}>
                            {items}
                        </Card>
                    </CardGroup>
                </div>
                <Card>
                    <Modal isOpen={this.state.modalOpen} toggle={this.state.toggle} >
                        {platterDetail}
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>
                                close
                            </Button>
                        </ModalFooter>

                    </Modal>


                </Card>

            </div>
        )
    }
}

export default Menu
