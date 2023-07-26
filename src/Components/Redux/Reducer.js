import DISHES from '../MenuDish/Dish';
import Comments from '../MenuDish/Comment';
const redux = require('redux');

const initState = {
    dish: DISHES,
    Comments: Comments
}

export const rootReducer = ((state = initState, action) => {
    return state;
})

const store = redux.createStore(rootReducer)

console.log(store.getState());