import DISHES from '../MenuDish/Dish';
import Comments from '../MenuDish/Comment';

const initState = {
    dish: DISHES,
    comments: Comments,
    sample: "hello world"
}

export const rootReducer = ((state = initState, action) => {

    console.log("from reducer ", action);

    return state;
})


