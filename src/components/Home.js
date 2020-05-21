import React from 'react';
import nick from '../assets/nick_crockett.jpg';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.dark={
			color: "white",
			backgroundColor: "#202020"
		};

		this.light={
			color:"black",
			backgroundColor: "white",
			'&:hover': {backgroundColor:'#aaaaaa'}
		};

		this.darkmodeBubble={
			backgroundColor: "#3a3a3a",
			color: "white"
		};

		this.lightmodeBubble={
			backgroundColor: "#aaaaaa",
			color: "black"
		};
	}

	render(){
		return(
			<div className="App-Body" style={this.props.darkmode?this.dark:this.light}>
          <div className="Bio">
						<img src={nick} alt="Nicholas Crockett"></img>
						<p style={this.props.darkmode?this.darkmodeBubble:this.lightmodeBubble}> Hello! I am a recent Computer Science graduate from Southwest Baptist University. I studied Computer Science and Cyber Security, graduating with a Major in the former. I am passionate about problem solving and ensuring the security and well-being of those around me.</p>
					</div>
					<div className="Skills">
						<h2>Skills</h2>
						<h3>General</h3>
						<ul>
							{this.skillItem("Leadership/Communication", "Resident Assistant for Southwest Baptist University")}
							{this.skillItem("Interpersonal Communication","Resident Assistant for Southwest Baptist University.")}
							{this.skillItem("Team Player","Cyber Security Intern at Sho-Me Power")}
						</ul>

						<h3>{"Operating Systems(&use)"}</h3>
						<ul>
							{this.skillItem("CentOS","ElasticSearch, lab server, and learning environmnet")}
							{this.skillItem("Kali Linux","Penetration testing and password cracking")}
							{this.skillItem("Arch Linux","Personal computer, development environment, and Linux learning environment")}
							{this.skillItem("Ubuntu","Personal computer and linux learning environment")}
							{this.skillItem("Windows 10","Personal computer, development environment, and educational learning environment.")}
						</ul>
					</div>
					<div className="Experience">
						<h2>Experience</h2>
						<ul>
							{this.xpItem("Cyber-Security Intern", "Sho-Me Power", "May 2019-January 2020", "Researched, tested and implemented cyber security software defenses.")}
							{this.xpItem("Resident Assistant", "Southwest Baptist University", "August 2017 - May 2020", "Manage Interpersonal realationshipe, culture a positive and productive environment, and efficiently and effectively handle emergency situations for 50+ dorm residents")}
						</ul>
					</div>
        </div>
		)
	}

	skillItem(str1, str2){
    return(
      <li>
        <div>{str1}</div>
        <div>{str2}</div>
      </li>
    )
  }

  xpItem(title, loc, timeframe, desc){
    return(
      <li>
        <div className="Job-Title">{title}</div>
        <div className="Job-Location">{loc}</div>
        <div className="time">{timeframe}</div>
        <div className="desc">{desc}</div>
      </li>
    )
  }
}

export default Home;