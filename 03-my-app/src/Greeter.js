import React from 'react';

class Greeter extends React.Component{
	
	state = { 
		message : '[Dummy message]',
		userName : ''
	};

	onBtnGreetClick = () => {
		this.setState({ message : `Hi ${this.state.userName}, ${this.props.msg}`});
	}

	onTxtUserNameChange = (evt) => {
		this.setState({ userName : evt.target.value });
	}

	render(){
		
		return(
			<div>
				<h1>Greeter</h1>
				<hr/>
				<br/>
				<label htmlFor="">User Name :</label>
				<input type="text" onChange={this.onTxtUserNameChange} />
				<input type="button" value="Greet" onClick={this.onBtnGreetClick} />
				<div className="highlight">{this.state.message}</div>
			</div>
		)
	}
}

export default Greeter;