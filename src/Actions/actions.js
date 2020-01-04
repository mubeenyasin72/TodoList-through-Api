import {AddTask,DisplayTask,DeleteTask,EditTask} from './actionTypes';
import axios from "axios";


export const displayTodoFunction = ()=>dispatch=>{
    console.log("Api Fechting.............")
    axios.get("https://nodeapii.herokuapp.com/todoApp/addTask/oldTasks").then(response=>{
        console.log(response.data);
        dispatch({
            type:DisplayTask,
            payload:response.data
        })
    }).catch(error=>{
        console.log(error);
    })
   
}
export const addTodoFunction =(Data, crtl)=>dispatch=>{
    const state={
        task:{
            title:Data
        }
    }
    axios.post("https://nodeapii.herokuapp.com/todoApp/addTask/addNewTask", state).then(response=>{
        console.log(response.data);
        if(response.data.success === true){
            dispatch({
                type:AddTask,
                payload:response.data.task
            })
            crtl.setState({loading:false});
            crtl.setState({task:""});
        }
        
    }).catch(error=>{
        console.log(error);
        crtl.setState({loading:false});
    })
}
export const deleteTaskFunction =(Data) =>dispatch=>{
    console.log(Data,"Delete TodoList Data")
    const state={
        task:{
            _id:Data
        }
    }
    axios.post("https://nodeapii.herokuapp.com/todoApp/addTask/delTask", state).then(response=>{
        console.log(response.data);
        if(response.data.success === true){
            dispatch({
                type:DeleteTask,
                payload:response.data.task
            })
        }
        
    }).catch(error=>{
        console.log(error);
    })
}
export const editTaskFunction = (id,Data)=>dispatch=>{
    console.log(id,Data,"This Is the Id And Data")
    const state={
        task:{
            _id: id,
            title: Data
        }
    }
    axios.post("https://nodeapii.herokuapp.com/todoApp/addTask/updateTask", state).then(response=>{
        console.log(response.data);
        if(response.data.success === true){
            dispatch({
                type:EditTask,
                payload:response.data.task
            })
        }
        
    }).catch(error=>{
        console.log(error);
    })
}