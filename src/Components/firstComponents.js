import React, { Component } from 'react';
import {addTodoFunction} from '../Actions/actions';
import {connect} from 'react-redux';
class firstComponents extends Component {
    state={
        task:"",
        loading:false
    }
    addTask = ()=>{
        if (!this.state.loading) {
            this.setState(
              {
                loading: true
              },
              () => {
                this.timer = setTimeout(() => {}, this.state.loading === false);
                this.props.addTodoFunction(
                    this.state.task,
                    this
                );
              }
            );
          }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container" style={{textAlign:"center",marginTop:"5em"}}>
                    <input class="form-control" disabled={this.state.loading} type="text" value={this.state.task} placeholder="Enter The Task" onChange={
                        (event)=> this.setState({
                            task:event.target.value
                        })
                    } />
                    <br/>
                    <button disabled={this.state.loading} type="submit" class="btn  btn-lg" style={{marginTop:"10px"}}
                        onClick={this.addTask}
                    >
                        {this.state.loading && (
                      <i class="spinner-border" role="status" />
                    )}
                    {this.state.loading && <span>Adding Task</span>}
                    {!this.state.loading && <span>Add Task</span>}
                        
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
export default connect(null,{addTodoFunction}) (firstComponents);