import {AddTask,DisplayTask,DeleteTask,EditTask} from '../Actions/actionTypes';


const state={
    tasks:[]
};


function mainReducer (mState = {...state},action){
    switch(action.type){
        case DisplayTask:
            if(action.payload === null || action.payload === undefined){

            }else{
                mState.tasks = action.payload.taskList;
                console.log(mState.tasks,"this is Reducer Data")
            }
            return deepCopy(mState);

        case AddTask:
            if(action.payload === null ||  action.payload === undefined){

            }else{
                mState.tasks.push(action.payload)
            }
            return deepCopy(mState);
        case DeleteTask:
            if(action.payload === null || action.payload === undefined){

            }else{
                    mState.tasks = mState.tasks.filter(ls => ls._id !== action.payload._id);
            }
            return deepCopy(mState);
        case EditTask:
            if(action.payload === null || action.payload === undefined){

            }else{
                const mTasks =mState.tasks;
                const index = mState.tasks.findIndex(ls => ls._id === action.payload._id);
                if(index >=0){
                  mTasks[index] = action.payload
                }
            }
            return deepCopy(mState);
        default:
            return deepCopy(mState);
        
    }
}

const deepCopy = obj=>{
    const newObj = JSON.parse(JSON.stringify(obj))
    return newObj;
}





export default mainReducer;