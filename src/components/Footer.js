import React from 'react';
import ln from '../assets/LI-In-Bug.png';
import GitHubLight from '../assets/GitHub-Mark-Light-64px.png';
import GitHubDark from '../assets/GitHub-Mark-64px.png';
import Facebook from '../assets/facebookLogo.png';


class Footer extends React.Component {
	constructor(props){
		super(props);


		this.lightstyle={
			background: "#eee"
		}
	}

	render(){
		return(
			<div className="App-Footer" style={this.props.darkmode?null:this.lightstyle}>
				<div className="Footer-Content">
					<ul>
						<li onClick={() => this.props.updatePage("Home")}>About Me</li>
						<li onClick={() => this.props.updatePage("Experience")}>Experience and Skills</li>
						<li onClick={() => this.props.updatePage("ContactMe")}>Contact Me</li>
					</ul>

					<ul>
						<li><a href="https://github.com/nicholasccrockett/ncc-portfolio" target="_blank">Github Source</a></li>
						<li><a href="https://nccrockett.wordpress.com" target="_blank">Personal Blog Post</a></li>
					</ul>

					<ul className="socMed">
						<a href="https://www.linkedin.com/in/nicholas-c-crockett/" target="_blank"><img src={ln} alt="LinkedIn Profile"></img></a>
						<a href="https://github.com/nicholasccrockett" target="_blank"><img src={this.props.darkmode?GitHubLight:GitHubDark}></img></a>
						<a href="https://www.facebook.com/nicholas.crockett.3/" target="_blank"><img src={Facebook}></img></a>
					</ul>
				</div>
			</div>
		)
	}
}

export default Footer;