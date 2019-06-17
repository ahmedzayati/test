// import { PERSONNELS } from "../shared/personnel";
import * as ActionTypes from "./ActionTypes";
import { stat } from "fs";

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
        
        case ActionTypes.ADD_QUESTION:
        const date=new Date();
        const d=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
       return({...state,
                forum:state.forum.concat({
                  publication: action.question.contenu,
                  date: d,
                  nomClient: action.question.nomClient,
                  codePublication: action.question.codePublication,
                  reponses: [
                    
                  ]
                })          
      })

        
        
        
        
        
    default:
      return state;
  }
};
