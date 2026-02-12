import { GET_USER_ERRORS } from "../actions/user.actions";
import { GET_CARD_ERROR } from "../actions/card.action";

const initialState = { userError : []}

export default function errorReducer(state = initialState, action:any) {
    switch (action.type) {
        case GET_USER_ERRORS:
            return {
                userError: action.payload
            }
        case GET_CARD_ERROR: {
            return {
                cardError: action.payload
            }
        }
            default:
                return state 
    }
}