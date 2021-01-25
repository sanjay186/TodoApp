
export const middleware =(store) =>(next) =>(action)=>{

if(action.type ==='DELETE_LIST'){
    alert("Are sure you want to delete the list?");
    store.dispatch({type:'DELETE_LIST'});
}
next(action);
};