import Comments from '../MenuDish/Comment';
import { combineReducers } from 'redux';
import * as ActionTypes from './ActionTypes'

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case ActionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case ActionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;
    }

}

const commentReducer = ((commentState = Comments, action) => {

    switch (action.type) {

        case ActionTypes.ADD_COMMENT:

            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment)

        default:
            return commentState;

    }
})

export const rootReducer = combineReducers({
    dish: dishReducer,
    comments: commentReducer
})


