export const initialState = {
    basket: [],
};

const reducer =  (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // Logic for adding items to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing items from basket
            return {state};
            break;
        default:
            return state;
    }
}

export default reducer;