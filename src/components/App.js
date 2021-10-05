import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    state={para:""};
	};
	handleClick(){
		setState({para:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})

    render() {
    	return(
    		<div id="main">
			<p id="para">{this.state.para}</p>
<button id="click" onClick={handleClick}>Click</button>{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

