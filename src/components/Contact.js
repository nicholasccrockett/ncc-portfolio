import React from 'react';
import Form from './Form';
class Contact extends React.Component {
	constructor(props){
		super(props);

		this.state = {contactMe: false};
		
	}

	ableContactMe(){
		this.setState({contactMe: !this.state.contactMe})
	}

	render(){
		return(
			<div className="App-Contacts">
				<h1>Contact Me</h1>
				<h2>E-Mail: nicholasccrockett@gmail.com</h2>
				<h2>Phone: 573.286.7675</h2>
				<br></br>
				<h1>or</h1>
				<h2 onClick={this.ableContactMe}>Contact Me Here</h2>
				<Form/>
			</div>
		)
	}
}

export default Contact;