import React, { Component } from 'react';
import {connect} from 'react-redux';
import {displayTodoFunction,deleteTaskFunction,editTaskFunction} from '../Actions/actions';


 class bodyComponents extends Component {

    state={
        enable:false,
        id:0,
        task:""
    };


    componentDidMount(){
        this.props.displayTodoFunction();
       
    }

    render() {
        console.log(this.props.tasks,"This is Props Data in Body ") 
       
        return (
            <React.Fragment>
                <div className="container" >
                <h1 style={{textAlign:"center",background:"#42a5f5",marginBottom:"20px",marginTop:"20px"}}>Todo_List Through Api</h1>
                   <div >
                   
                    {this.props.task.length>0?
                         this.props.task.map(ls=>
                            (<div key={ls.id}>
                                

                                <li style={{listStyle:"none"}}>
                                    {
                                       
                                        ls.title
                                    }
                                  
                                    <button style={{marginLeft:"15px",marginTop:"20px"}} class="btn btn-warning"
                                        onClick={
                                            ()=> this.props.deleteTaskFunction(ls._id)
                                        }
                                    >
                                        Delete Task
                                    </button>
                                    <button class="btn btn-primary rounded" id="btn-light-edit" style={{marginLeft:"10px"}}
                                        onClick={
                                            ()=> this.props.editTaskFunction(
                                                ls._id,
                                                this.state.task
                                            )
                                        }
                                    > Edit</button>
                                       { 
                                                    ls._id=== this.state.id && this.state.enabled ===true ?
                                                    <input type="text" placeholder="Enter a value" id="update-input-field" onChange={event => this.setState({ task: event.target.value })} />
                                                    : <span>{this.state.name}</span>
                                                }
                                                <button class="btn btn-success" onClick={() =>this.setState({

                                                                enabled: !this.state.enabled,
                                                                id:ls._id

                                                })} type="submit" style={{marginLeft:"10px"}} >
                                                    {
                                                        this.state.enabled === true? "Disable": "Enable"
                                                    }
                                                </button>
                                </li>
                             </div>
                         )):""
                     
                    }
                      
                    </div>  
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state =>({
    task: state.MainReducer.tasks
})
export default connect (mapStateToProps,{displayTodoFunction,deleteTaskFunction,editTaskFunction}) (bodyComponents);