import React from "react";

class MyComponent extends React.Component{

    state={
        text:'test state'
    }

    handleChange =(event) =>{
        this.setState({text: event.target.value.toUpperCase()});
    }

    render(){
        return(
            <>
                <input placeholder="your text" value={this.state.text} onChange={this.handleChange} />
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

export default MyComponent;