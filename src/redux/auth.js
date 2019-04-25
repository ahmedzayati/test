import * as ActionTypes from './ActionTypes';

const initialState={
    isAuthentificated:false,
    grade:'',
    user:{}
}
export const  Auth = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_USER:
            return {...state,
                isAuthentificated:true,
                user:action.payload
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