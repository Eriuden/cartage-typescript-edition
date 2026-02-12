import { GET_ALL_POSTS , EDIT_COMMENT, UPDATE_POST, DELETE_COMMENT, DELETE_POST, LIKE_POST, DISLIKE_POST, UNLIKE_POST, UNDISLIKE_POST } from "../actions/post.actions";

const initialState:any = {}

export const postReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.payload
        case LIKE_POST:
            return state.map((post:any,userId:string) => {
                if (post.id === action.payload.postId){
                    return {
                        ...post,
                        likers: [action.payload,userId, ...post.likers]
                    }
                } else return post 
            })
        case DISLIKE_POST:
            return state.map((post:any, userId:string) => {
                if (post.id === action.payload.postId)
                    return {
                        ...post,
                        dislikers: [action.payload,userId, ...post.dislikers]
                    }
                return post 
            })
        
        case UNLIKE_POST:
            return state.map((post:any) => {
                if (post.id === action.payload.postId)
                    return {
                        ...post,
                        likers: post.likers.filter((id:string) => id !== action.payload.userId)
                    }
                return post 
            })

        case UNDISLIKE_POST:
            return state.map((post:any) => {
                if (post.id === action.payload.postId)
                    return {
                        ...post,
                        dislikers: post.dislikers.filter((id:string) => id !== action.payload.userId)
                    }
                return post 
            })
            
        case UPDATE_POST:
            return state.map((post:any) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        message: action.payload.message
                    }
                } else return post 
            })
        case DELETE_POST:
            return state.filter((post:any) => post._id !== action.payload.postId)
        case EDIT_COMMENT:
            return state.map((post:any) => {
                if(post.id === action.payload.postId) {
                    return {
                        ...post,
                        comment: post.comment.map((comment:any) => {
                            if (comment._id === action.payload.commentId) {
                                return {
                                    ...comment,
                                    Text: action.payload.text 
                                }
                            } else {
                                return comment
                            }
                        })
                    }
                } else return post 
            })
        case DELETE_COMMENT:
            return state.map((post:any) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        comments: post.comment.filter((comment:any) => comment._id !== action.payload.commentId)
                    }
                } else return post 
            })
        
            default:
                return state
    }
}