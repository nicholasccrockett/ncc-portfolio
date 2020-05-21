import React from 'react';
import invertdark from '../assets/invert_colors-white-24dp.svg';
import invertlight from '../assets/invert_colors-black-24dp.svg';

class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.dark={
			color: "white",
			backgroundColor: "#3a3a3a"
		}

		this.light={
			color:"black",
			backgroundColor: "#aaa",
			'&:hover': {backgroundColor:'#aaaaaa'}
		}

		this.darkmodeButton={
			backgroundColor: "#3a3a3a"
		}
		this.lightmodeButton={
			backgroundColor: "#aaa"
		}

	}

	render() {
    return (
			<div className="App-Navigation" style={this.props.darkmode? this.dark: this.light}>
				<h1>Nicholas Crockett</h1>

				<ul>
					<li><button onClick={() => this.props.updatePage("Home")} style={this.props.darkmode? this.dark: this.light}>Overview</button></li>
					<li><button onClick={() => this.props.updatePage("Experience")} style={this.props.darkmode? this.dark: this.light}>Skill & Experience</button></li>
					<li><button onClick={() => this.props.updatePage("ContactMe")} style={this.props.darkmode? this.dark: this.light}>Contact Me</button></li>
				</ul>
				<button style={this.props.darkmode?this.darkmodeButton:this.lightmodeButton} onClick={this.props.switchMode}>{this.props.darkmode?<img src={invertdark} alt="Invert Colors"/>:<img src={invertlight } alt="Invert Colors"/>}</button>
			</div>
    );
  }
}

export default Navigation