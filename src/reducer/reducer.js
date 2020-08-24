import { ADD_TO_LIST , IS_DONE } from "../actions/action";

const initalState = {
    todolist:[
        {
            name:'item1',
            done:true,
        },
      
    ]
}


function todoReducer(state=initalState ,action){
    switch(action.type){
        case ADD_TO_LIST:{
            const {value,isdone} =action;
            const arr = {
                name: value,
                done: isdone,
            }
       
           
            return {...state ,
                todolist : [...state.todolist , arr]
            }

        }
        case IS_DONE:{
            const {value , isdone}=action;
           const {todolist} =state;
           const m=todolist.findIndex((e)=>(e.name === value));
           
           return{
                ...state,
                todolist:{
                    ...state.todolist,
                    [m]:{
                        name:value,
                        done: isdone,
                    }
                }
                    
                
                    
                
            }
        }
        default:
          return  state;
    }
}

export default todoReducer;