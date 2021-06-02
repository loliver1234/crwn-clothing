import SHOP_DATA from './shop.data';

const INITIAL_SETATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_SETATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default shopReducer;