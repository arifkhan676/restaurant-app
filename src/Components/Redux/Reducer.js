import DISHES from '../MenuDish/Dish';
import Comments from '../MenuDish/Comment';

const initState = {
    dish: DISHES,
    Comments: Comments
}

export const rootReducer = ((state = initState, action) => {
    return state;
})


