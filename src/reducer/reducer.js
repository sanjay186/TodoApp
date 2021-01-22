import { ADD_TO_LIST , IS_DONE, DONETAB ,DELETE_LIST} from "../actions/action";

const initalState = {
    todolist:[
        {
            name:'item1',
            done:true,
        },
      
    ],

    tab: 'ALLLIST',
}


function todoReducer(state=initalState ,action){
    switch(action.type){
        case ADD_TO_LIST:{
            const {value,isdone,tab} =action;
            const arr = {
                name: value,
                done: isdone,
            }
       
           
            return {...state ,
                todolist : [...state.todolist , arr],
                tab:tab,
            }

        }
        case IS_DONE:{
            const {value , isdone}=action;
           const {todolist} =state;
           const m=todolist.findIndex((e)=>(e.name === value));
           
           return{
                ...state,
                todolist:state.todolist.map(
                    (todolist , i )=> i === m ?{...todolist,done:isdone}:todolist


                )
                
            }
        }
        case DONETAB:{
            const {tab}=action;
            return{
                    ...state , 
                    tab: tab,
            }
        }
        case DELETE_LIST:{
            return{
                state,
            }
        }
        default:
          return  state;
    }
}

export default todoReducer;