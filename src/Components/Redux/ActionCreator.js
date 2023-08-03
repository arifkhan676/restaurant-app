import axios from 'axios'
import * as ActionTypes from './ActionTypes'
import { baseURL } from './baseURL'
import { type } from '@testing-library/user-event/dist/type'
import { actions } from 'react-redux-form'

export const addComment = (dishId, author, rating, comment) => dispacth => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    axios.post(baseURL + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispacth(commentConcat(comment)))
}

export const commentConcat = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const commentLoading = () => ({
    type: ActionTypes.COMMENT_LOADING,
})
export const LoadComment = comments => ({
    type: ActionTypes.LOAD_COMMENT,
    payload: comments
})

export const fetchComment = () => {
    return dispacth => {

        dispacth(commentLoading());

        axios.get(baseURL + 'comments')
            .then(response => response.data)
            .then(comments => dispacth(LoadComment(comments)))


    }
}

export const failed_dishes = (errMess) => ({
    type: ActionTypes.FAILED_DISHES,
    payload: errMess
})


export const Dish_Load = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const Load_Dishes = dishes => ({
    type: ActionTypes.LOAD_DISHES,
    payload: dishes
})

/* spinner added */

export const fetchDishes = () => {
    return dispacth => {

        dispacth(Dish_Load());

        axios.get(baseURL + 'dishes')
            .then(response => response.data)
            .then(dishes => dispacth(Load_Dishes(dishes)))
            .catch(error => dispacth(failed_dishes(error.message)))
    }
}