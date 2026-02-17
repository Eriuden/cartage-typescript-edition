import axios from "axios";

export const GET_CARD = "GET_CARD"
export const GET_ALL_CARDS = "GET_ALL_CARDS"
export const GET_CARD_ERROR = "GET_CARD_ERROR"
export const ADD_CARD = "ADD_CARD"
export const UPDATE_CARD = "UPDATE_CARD"
export const UPLOAD_CARD_PICTURE = "UPLOAD_CARD_PICTURE"
export const DELETE_CARD = "DELETE_CARD"

export const ADD_COMMENT= "ADD_COMMENT"
export const EDIT_COMMENT= "EDIT_COMMENT"
export const DELETE_COMMENT= " DELETE_COMMENT"

type cardProps = {
    cardId: string,
    picture: string,
    name: string,
    power: string,
    effect: string,
    shield: string,
    nation: string,
    price: string,
    likers:[string],
    dislikers:[string],
}

export const getAllCards = (num:number, dispatch:any) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/card`)
            .then((res:any)=> {
                dispatch ({type: GET_CARD, payload: num})
                dispatch({type:GET_ALL_CARDS, payload: res.data})
            })
            .catch((err:any) => window.alert(err))
}

export const getCard = (cardId: string, dispatch:any) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/card/:id`)
            .then(()=> {
                dispatch({type:GET_CARD, payload:cardId})
            })
            .catch((err:any)=> window.alert(err))
}

export const addCard = (data: any, dispatch:any) => {
        return axios 
            .post(`${process.env.REACT_APP_API_URL}api/card`, data)
            .then((res:any)=> {
                if (res.data.errors) {
                    dispatch({type: GET_CARD_ERROR, payload: res.data.errors})
                } else {
                    dispatch ({type: GET_CARD_ERROR, payload:""})
                }
            })
}

export const updateCard = ({
    cardId,
    name,
    power,
    effect,
    shield,
    nation,
    price
} : cardProps , dispatch:any
) => {
        return axios({
            method:"put",
            url:`${process.env.REACT_APP_API_URL}api/card/${cardId}`,
            data: { name, power, effect, shield, nation, price},
        })
        .then(()=> {
            dispatch({
                type: UPDATE_CARD,
                payload: {name, power, effect, shield, nation, price}
            })
        })
        .catch((err:any)=> window.alert(err))
}

export const uploadPicture = (data: any, cardId: string , dispatch:any) => {
        return axios 
            .post(`${process.env.REACT_APP_API_URL}api/card/upload-cardPic`, data)
            .then((res:any)=> {
                if (res.data.errors) {
                    dispatch({type: GET_CARD_ERROR, payload: res.data.errors})
                } else {
                    dispatch ({ type: GET_CARD_ERROR, payload: ""})
                    return axios
                    .get(`${process.env.REACT_APP_API_URL}api/card/${cardId}`)
                    .then((res:any)=> {
                        dispatch({ type: UPLOAD_CARD_PICTURE, payload: res.data.picture})
                    })
                }
            })
            .catch((err:any) => console.log(err))
}

export const deleteCard = ({
    cardId,
    name,
    power,
    effect,
    shield,
    nation,
    price
    } : cardProps, dispatch:any) => {
        return axios ({
            method:"delete",
            url:`${process.env.REACT_APP_API_URL}api/card/${cardId}`,
            data: {cardId, name, power, effect, shield, nation, price}
        })
        .then(()=> {
            dispatch({type: DELETE_CARD, payload: {cardId}})
        })
}

export const addCommentCard = (cardId: string, commentId: string, commenterId: string, text: string, commenterName: string
    ,dispatch:any) => {
        return axios({
            method:"patch",
            url: `${process.env.REACT_APP_API_URL}api/card/comment-card/${cardId}`,
            data: {commentId, commenterId, text, commenterName}
        })
        .then(()=> {
            dispatch({ type: ADD_COMMENT, payload: {cardId}})
        })
        .catch((err:any)=> window.alert(err))
}

export const editCommentCard = (cardId: string, commentId: string, text: string, dispatch:any) => {
        return axios({
            method:"patch",
            url: `${process.env.REACT_APP_API_URL}api/card/edit-comment-card/${cardId}`,
            data: { commentId, text}
        })
        .then(()=> {
            dispatch({ type: EDIT_COMMENT, payload: {cardId, commentId, text}})
        })
        .catch((err:any)=> window.alert(err))
}

export const deleteCommentCard = (cardId:string, commentId:string, dispatch:any) => {
        return axios({
            method:"patch",
            url: `${process.env.REACT_APP_API_URL}api/card/delete-comment-card/${cardId}`,
            data:{commentId},
        })
        .then(()=> {
            dispatch({ type: DELETE_COMMENT, payload: {cardId, commentId}})
        })
        .catch((err:any)=> window.alert(err))
}