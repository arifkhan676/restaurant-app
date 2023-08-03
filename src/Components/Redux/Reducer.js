import { combineReducers } from 'redux';
import * as ActionTypes from './ActionTypes'
import { InitialForm } from '../Body/InitialForm';
import { createForms } from 'react-redux-form';

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

const commentReducer = ((commentState = { isLoading: false, comments: [] }, action) => {

    switch (action.type) {

        case ActionTypes.LOAD_COMMENT:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }
        case ActionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }

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
    comments: commentReducer,
    ...createForms({
        feedback: InitialForm
    })

})


