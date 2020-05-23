/*
	File: Contact.js
	Purpose: Display contact information and Contact Form.
	Desc: Displays email, phone number and social media links to my accounts.
		Also contains Form allowing the user to send an email to me
*/

import React from 'react';
import Form from './Form';
import ln from '../assets/LI-In-Bug.png';
import GitHubLight from '../assets/GitHub-Mark-Light-64px.png';
import GitHubDark from '../assets/GitHub-Mark-64px.png';
import Facebook from '../assets/facebookLogo.png';

class Contact extends React.Component {
	constructor(props){
		super(props);

		this.state = {contactMe: false};

		this.light={
			color:"black",
			backgroundColor: "white",
			'&:hover': {backgroundColor:'#aaaaaa'}
		};

		this.darkmodeBubble={
			backgroundColor: "#181818",
			color: "white"
		};

		this.lightmodeBubble={
			backgroundColor: "#303030",
			color: "black"
		};
	}

	ableContactMe(){
		this.setState({contactMe: !this.state.contactMe})
	}

	render(){
		return(
			<div className="App-Contacts" style={this.props.darkmode?this.dark:this.light}>
				<h1>Contact Me</h1>
				<h2>E-Mail: nicholasccrockett@gmail.com</h2>
				<h2>Phone: 573.286.7675</h2>
				<br></br>
				<div className="SocialMedia">
					<a href="https://www.linkedin.com/in/nicholas-c-crockett/" target="_blank" className="tooltip"><span className="tooltiptext">LinkedIn Profile</span><img src={ln} alt="LinkedIn Profile"></img></a>
					<a href="https://github.com/nicholasccrockett" target="_blank" className="tooltip"><span className="tooltiptext">GitHub Profile</span><img src={this.props.darkmode?GitHubLight:GitHubDark}></img></a>
					<a href="https://www.facebook.com/nicholas.crockett.3/" target="_blank"className="tooltip"><span className="tooltiptext">Facebook Profile</span><img src={Facebook}></img></a>
				</div>
				<br></br>
				<h1>or</h1>
				<h2 onClick={this.ableContactMe}>Contact Me Here</h2>
				<Form darkmode={this.props.darkmode}/>
			</div>
		)
	}
}

export default Contact;