import React from 'react';
import nick from '../assets/nick_crockett.jpg';
import {TagCloud} from 'react-tagcloud';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.dark={
			color: "white",
			backgroundColor: "#202020"
		};

		this.light={
			color:"black",
			backgroundColor: "#eaeaea",
			'&:hover': {backgroundColor:'#aaaaaa'}
		};

		this.darkmodeBubble={
			backgroundColor: "#3a3a3a",
			color: "white"
		};

		this.lightmodeBubble={
			backgroundColor: "#bbb",
			color: "black"
		};

		this.darkmodeBubbleSkills={
			backgroundColor: "#181818",
			color: "white"
		};

		this.lightmodeBubbleSkills={
			backgroundColor: "#303030",
			color: "lightgrey"
		};

		this.skills = [
			{	value: "Leadership", count: 40},
			{ value: "Interpersonal Communication", count: 35},
			{ value: "Team Player", count: 37},
			{ value: "Object Oriented Programming", count: 28},
			{ value: "Arch Linux", count: 28},
			{ value: "CentOS", count: 30},
			{ value: "Windows 10", count: 24},
			{ value: "Java", count: 32},
			{ value: "Python", count: 30},
			{ value: "C Lang", count: 34},
			{ value: "bash", count: 38},
			{ Value: "JavaScript", count: 27},
			{ value: "React", count:31},
			{ value: "M.I.P.S.", count: 25}
		]

		this.cloudOptions={
			hue: "green"
		}
	}

	render(){
		return(
			<div className="App-Body" style={this.props.darkmode?this.dark:this.light}>
          <div className="Bio">
						<img src={nick} alt="Nicholas Crockett"></img>
						<p style={this.props.darkmode?this.darkmodeBubble:this.lightmodeBubble}> Hi! I'm Nick Crockett <br/><br/>I am a recent Computer Science graduate from Southwest Baptist University. I studied Computer Science and Cyber Security, graduating with a Major in the former. I am passionate about problem solving and ensuring the security and well-being of those around me.<br/><br/> I am from Central Missourri, currently living in Marshfield. I pass the time by playing guitar, enjoying outdoors via hiking or running, or delving into a movie.<br/><br/>For those interested in personality tests, I am an ENFP on the Myers-Briggs test and I identify as a 7 on the Enneagram.<br/><br/>I am also a big believer that <b onClick={this.props.switchMode}>darkmode</b> is a functional requirement for any project.<br/><br/>For more information about my skills and past experiences check out the relevant page.</p>
					</div>
					<div className="Skills" style={this.props.darkmode?this.darkmodeBubbleSkills:this.lightmodeBubbleSkills}>
						<h2>Skills</h2>
						<TagCloud
							minSize={20}
							maxSize={60}
							tags={this.skills}
							shuffle={true}
							colorOptions={this.cloudOptions}
							/>
					</div>
					<div className="Experience" style={this.props.darkmode?this.darkmodeBubbleSkills:this.lightmodeBubbleSkills}>
						<h2>Experience</h2>
						<ul>
							{this.xpItem("Cyber-Security Intern", "Sho-Me Power", "May 2019-January 2020", "Researched, tested and implemented cyber security software defenses.")}
							<br></br>
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
      <li className="ExperienceItem">
        <div className="Job-Title">{title}</div>
        <div className="Job-Location">{loc}</div>
        <div className="time">{timeframe}</div>
        <div className="desc">{desc}</div>
      </li>
    )
  }
}

export default Home;