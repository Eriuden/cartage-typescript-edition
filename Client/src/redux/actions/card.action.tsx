import axios from "axios";

export const GET_CARD = "GET_CARD"
export const GET_ALL_CARDS = "GET_ALL_CARDS"
export const GET_CARD_ERROR = "GET_CARD_ERROR"
export const ADD_CARD = "ADD_CARD"
export const UPDATE_CARD = "UPDATE_CARD"
export const UPLOAD_CARD_PICTURE = "UPLOAD_CARD_PICTURE"
export const DELETE_CARD = "DELETE_CARD"

export const LIKE_CARD = "LIKE_CARD"
export const UNLIKE_CARD = "UNLIKE_CARD"
export const DISLIKE_CARD = "DISLIKE_CARD"
export const UNDISLIKE_CARD = "UNDISLIKE_CARD"

export const ADD_COMMENT= "ADD_COMMENT"
export const EDIT_COMMENT= "EDIT_COMMENT"
export const DELETE_COMMENT= " DELETE_COMMENT"

type cardProps = {
    articleId: string,
    picture: string,
    name: string,
    typeArticle: string,
    groupe: string,
    price: string
    likers:[string],
    dislikers:[string],
}

export const getAllArticles = (num:number, dispatch:any) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/article`)
            .then((res:any)=> {
                dispatch ({type: GET_CARD, payload: num})
                dispatch({type:GET_ALL_CARDS, payload: res.data})
            })
            .catch((err:any) => window.alert(err))
}

export const getArticle = (articleId: string, dispatch:any) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/article/:id`)
            .then(()=> {
                dispatch({type:GET_CARD, payload:articleId})
            })
            .catch((err:any)=> window.alert(err))
}

export const addArticle = (data: any, dispatch:any) => {
        return axios 
            .post(`${process.env.REACT_APP_API_URL}api/article`, data)
            .then((res:any)=> {
                if (res.data.errors) {
                    dispatch({type: GET_CARD_ERROR, payload: res.data.errors})
                } else {
                    dispatch ({type: GET_CARD_ERROR, payload:""})
                }
            })
}

export const updateArticle = ({
    articleId,
    name,
    typeArticle,
    groupe,
    price
} : cardProps , dispatch:any
) => {
        return axios({
            method:"put",
            url:`${process.env.REACT_APP_API_URL}api/article/${articleId}`,
            data: { name, typeArticle, groupe, price},
        })
        .then(()=> {
            dispatch({
                type: UPDATE_CARD,
                payload: {articleId, name, typeArticle, groupe, price}
            })
        })
        .catch((err:any)=> window.alert(err))
}

export const uploadPicture = (data: any, articleId: string , dispatch:any) => {
        return axios 
            .post(`${process.env.REACT_APP_API_URL}api/article/upload-articlePic`, data)
            .then((res:any)=> {
                if (res.data.errors) {
                    dispatch({type: GET_CARD_ERROR, payload: res.data.errors})
                } else {
                    dispatch ({ type: GET_CARD_ERROR, payload: ""})
                    return axios
                    .get(`${process.env.REACT_APP_API_URL}api/article/${articleId}`)
                    .then((res:any)=> {
                        dispatch({ type: UPLOAD_CARD_PICTURE, payload: res.data.picture})
                    })
                }
            })
            .catch((err:any) => console.log(err))
}

export const deleteArticle = ({
    articleId, picture, name, typeArticle, groupe, price
} : cardProps, dispatch:any) => {
        return axios ({
            method:"delete",
            url:`${process.env.REACT_APP_API_URL}api/article/${articleId}`,
            data: {picture, name, typeArticle, groupe, price}
        })
        .then(()=> {
            dispatch({type: DELETE_CARD, payload: {articleId}})
        })
}

export const likeArticle = (articleId: string, userId: string, dispatch:any) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/article/like-article`+ articleId,
            data: {id:userId}
        })
        .then(()=> {
            dispatch({type: LIKE_CARD, payload: {articleId, userId}})
        })
        .catch((err:any)=> window.alert(err))
}

export const unlikeArticle = (articleId: string, userId: string, dispatch:any) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/article/unlike-article`+ articleId,
            data: {id:userId}
        })
        .then(()=> {
            dispatch({type: UNLIKE_CARD, payload: {articleId, userId}})
        })
        .catch((err:any)=> window.alert(err))
}

export const dislikeArticle = (articleId: string, userId: string, dispatch:any) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/article/dislike-article`+ articleId,
            data: {id:userId}
        })
        .then(()=> {
            dispatch({type: DISLIKE_CARD, payload: {articleId, userId}})
        })
        .catch((err:any)=> window.alert(err))
}

export const undislikeArticle = (articleId: string, userId: string, dispatch:any) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/article/undislike-article`+ articleId,
            data: {id:userId}
        })
        .then(()=> {
            dispatch({type: UNDISLIKE_CARD, payload: {articleId, userId}})
        })
        .catch((err:any)=> window.alert(err))
}

export const addCommentArticle = (articleId: string, commentId: string, commenterId: string, text: string, commenterName: string
    ,dispatch:any) => {
        return axios({
            method:"patch",
            url: `${process.env.REACT_APP_API_URL}api/article/comment-article/${articleId}`,
            data: {commentId, commenterId, text, commenterName}
        })
        .then(()=> {
            dispatch({ type: ADD_COMMENT, payload: {articleId}})
        })
        .catch((err:any)=> window.alert(err))
}

export const editCommentArticle = (articleId: string, commentId: string, text: string, dispatch:any) => {
        return axios({
            method:"patch",
            url: `${process.env.REACT_APP_API_URL}api/article/edit-comment-article/${articleId}`,
            data: { commentId, text}
        })
        .then(()=> {
            dispatch({ type: EDIT_COMMENT, payload: {articleId, commentId, text}})
        })
        .catch((err:any)=> window.alert(err))
}

export const deleteCommentArticle = (articleId:string, commentId:string, dispatch:any) => {
        return axios({
            method:"patch",
            url: `${process.env.REACT_APP_API_URL}api/article/delete-comment-article/${articleId}`,
            data:{commentId},
        })
        .then(()=> {
            dispatch({ type: DELETE_COMMENT, payload: {articleId, commentId}})
        })
        .catch((err:any)=> window.alert(err))
}