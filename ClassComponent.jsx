import React,{Component} from 'react';
class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            message:'Here is a simple Class Component',
        }
    }
    changeMessage=()=>{
        this.setState({message:'Message have changed from the CLass'});
    };
    render(){
        return(
            <div>
                <h2>Class Component</h2>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>Change</button>
            </div>
        )
    }
}
export default ClassComponent;