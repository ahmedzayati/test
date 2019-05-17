import * as ActionTypes from './ActionTypes';

const initialState={
    isAuthentificated:false,
    grade:'',
    user:{},
    orders:[],
    errors:{}
}
export const  Auth = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_USER:
            return {...state,
                isAuthentificated:true,
                user:action.payload
            };
            case ActionTypes.RM_USER:
            return {...state,
                isAuthentificated:false,
                grade:0,
                user:action.payload
            };
            case ActionTypes.ADD_CLIENT_ORDERS:
            return {...state,
                orders:action.orders
            };
            case ActionTypes.SET_ERROR:
            return {...state,
                errors:action.payload
            };
            case ActionTypes.SET_ADMIN:
            return {...state,
                isAuthentificated:true,
                grade:action.payload.grade,
                user:action.payload
            };
        default:
            return state; 
    }
};