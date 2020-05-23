/*
	File: Nav.js
	Purpose: Navigational Bar and tools
	Desc: Displays navigation bar  at top of the screen. Contains links to 'About Me', 'Experiences' and 'Contact Me' pages
		as well as a link to my this projects github repository and a theme/visual mode changer.
*/

import React from 'react';
import invertdark from '../assets/invert_colors-white-24dp.svg';
import invertlight from '../assets/invert_colors-black-24dp.svg';
import GitHubLight from '../assets/GitHub-Mark-Light-64px.png';
import GitHubDark from '../assets/GitHub-Mark-64px.png';

class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.dark={
			color: "white",
			backgroundColor: "#3a3a3a",
			'&:hover':{backgroundColor: "#333"}
		}

		this.light={
			color:"black",
			backgroundColor: "#bbb",
			'&:hover': {backgroundColor:'#aaaaaa'}
		}

		this.darkmodeButton={
			backgroundColor: "#3a3a3a"
		}
		this.lightmodeButton={
			backgroundColor: "#bbb"
		}

	}

	render() {
    return (
			<div className="App-Navigation" style={this.props.darkmode? this.dark: this.light}>
				<h1>Nicholas Crockett</h1>
				<ul>
					<li><button onClick={() => this.props.updatePage("Home")} style={this.props.darkmode? this.dark: this.light}>About Me</button></li>
					<li><button onClick={() => this.props.updatePage("Experience")} style={this.props.darkmode? this.dark: this.light}>Skill & Experience</button></li>
					<li><button onClick={() => this.props.updatePage("ContactMe")} style={this.props.darkmode? this.dark: this.light}>Contact Me</button></li>
				</ul>
				<br/>
				<div className="buttonSelection">
					<button style={this.props.darkmode?this.darkmodeButton:this.lightmodeButton} onClick={this.props.switchMode} className="tooltip"><span className="tooltiptext">Light/Dark mode</span>{this.props.darkmode?<img src={invertdark} alt="Invert Colors"/>:<img src={invertlight } alt="Invert Colors"/>}</button>
					<a href="https://github.com/nicholasccrockett/ncc-portfolio" target="_blank" label="GitHub Repository"className="tooltip"><span className="tooltiptextOff">GitHub</span><img src={this.props.darkmode?GitHubLight:GitHubDark} style={{height: '60%'}} alt="This git-hub page"></img></a>
				</div>
			</div>
    );
  }
}

export default Navigation