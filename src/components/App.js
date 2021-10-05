import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state={para:""};
  };
  

	

    render() {
    	return(
    		<div id="main">
			{this.state.para}
<button id="click" onClick={() => this.setState({para:<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>})
}>Click</button>
    		</div>
    	);
    }
}


export default App;

