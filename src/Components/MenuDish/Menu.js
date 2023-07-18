import React, { useState } from 'react'
import DISHES from './Dish';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail'
import LoadComp from './LoadComp';

const Menu = () => {
    const [dish] = useState(DISHES);
    const [seeItem, setSeeItem] = useState(null);



    const ClickItem = (item) => {
        setSeeItem(item)
    }

    const items = dish.map((item) => {

        return <MenuItem Platter={item} ClickItem={ClickItem} key={item.id} />;
    })

    const isInState = seeItem ? <DishDetail passItem={seeItem} /> : null;
    console.log(isInState);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-5">
                    {items}
                </div>
                <div className="col-5">
                    {isInState}

                </div>
            </div>
        </div>
    )
}


export default Menu
