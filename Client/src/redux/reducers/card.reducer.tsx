import {GET_CARD, UPDATE_CARD, UPLOAD_CARD_PICTURE, DELETE_CARD,
   EDIT_COMMENT, DELETE_COMMENT} 
   from "../actions/card.action";
   
   const initialState:any = {}
   
   export const cardReducer = (state = initialState, action: any ) => {
       switch(action.type) {
           case GET_CARD:
               return action.payload
           case UPDATE_CARD:
               return state.map((card:any) => {
                   if (card.id === action.payload.cardId) {
                       return {
                           ...card,
                           name: action.payload.name,
                           nation: action.payload.typeArticle,
                           power: action.payload.licence,
                           effect: action.payload.effect,
                           shield: action.payload.shield,
                           price: action.payload.price
                       }
                   } else return card
               })
           case UPLOAD_CARD_PICTURE:
               return state.map((card:any)=> {
                   if (card.id === action.payload.cardId) {
                       return {
                           picture: action.payload.picture
                       } 
                   } else return card
               })
           case DELETE_CARD:
               return state.filter((card:any) => 
               card.id !== action.payload.cardId)
           case EDIT_COMMENT:
               return state.map((card:any) => {
                   if(card._id === action.payload.cardId) {
                       return {
                           ...card,
                           comments: card.comments.map((comment: any) => {
                               if (comment._id === action.payload.commentId) {
                                   return {
                                       ...comment,
                                       text: action.payload.text 
                                   }
                               } else {
                                   return comment
                               }
                           })
                       }
                   } else return card
               })
           case DELETE_COMMENT:
               return state.map((card:any) => {
                   if (card._id === action.payload.cardId) {
                       return {
                           ...card,
                           comments: card.comments.filter((comment:any) =>
                           comment._id !== action.payload.commentId)
                       }
                   } else return card
               })
             
           default:
               return state          
       }
   }