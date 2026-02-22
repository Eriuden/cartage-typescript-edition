import { combineReducers } from "redux";
import { cardReducer } from "./card.reducer";
import { allUsersReducer } from "./users.reducer";
import { userReducer } from "./user.reducer";
import errorReducer from "./error.reducer";
import { cartReducer } from "./cart.reducer";

export const reducers = combineReducers({
    cardReducer,
    allUsersReducer,
    userReducer,
    errorReducer,
    cartReducer,
})