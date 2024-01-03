import { configureStore } from "@reduxjs/toolkit";
import apiReducer from './Api'
import cartReducer , { getTotal } from './cartSlice'
//  const dispatch = useDispatch
const store = configureStore({
    reducer:{
        api:apiReducer,
        cart:cartReducer,
    },
});
store.dispatch(getTotal());
export default store



// Assuming you have a root reducer like this:

// import { combineReducers } from 'redux';
// import apiReducer from './Api'; // Assuming you have an api reducer
// import cartReducer , { getTotal } from './cartSlice'; // Assuming you have a cart reducer

// // Add the new cardDetails reducer
// const store = combineReducers({
//   api: apiReducer,
//   cart: cartReducer,
//   cardDetails: cardDetailsReducer,
//   // ... other reducers
// });
// store.dispatch(getTotal());
// export default store;
