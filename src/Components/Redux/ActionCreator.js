import * as ActionTypes from './ActionTypes'
import DISHES from '../MenuDish/Dish'

export const addComment = (dishId, author, rating, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
})
export const Dish_Load = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const Load_Dishes = dishes => ({
    type: ActionTypes.LOAD_DISHES,
    payload: dishes
})


export const fetchDishes = () => {
    return dispacth => {

        dispacth(Dish_Load());

        setTimeout(() => {
            dispacth(Load_Dishes(DISHES));
        }, 2000);


    }
}