// import { PERSONNELS } from "../shared/personnel";
import * as ActionTypes from "./ActionTypes";

export const Forum = (state = {forum:[]} , action) => {
  switch (action.type) {
    case ActionTypes.ADD_FORUM:
        return {...state,
          forum:action.forum
        }
        case ActionTypes.ADD_COMMENT:
       state.forum.map((ques)=>
        {if(ques.codePublication===action.comment.codePublication){
          ques.reponses.push(action.comment)
          console.log(ques)}
        })
        
        return{...state


        
        }
        
        
        
        
    default:
      return state;
  }
};
