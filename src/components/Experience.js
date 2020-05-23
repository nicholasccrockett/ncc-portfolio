import React from 'react';

class Experience extends React.Component {
  constructor(props){
    super(props);

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
			color: "lightgrey"
		};
  }

	render(){
		return(
			<div className="App-Experience" style={this.props.darkmode?this.dark:this.light}>
				<div className="Experience" style={this.props.darkmode?this.darkmodeBubble:this.lightmodeBubble}>
					<h2>Experience</h2>
          <h3>Professional</h3>
					<ul>
						{this.xpItem("Cyber-Security Intern", "Sho-Me Power", "May 2019 - January 2020", "Researched, tested and implemented cyber security software defenses.")}
						{this.xpItem("Resident Assistant", "Southwest Baptist University", "August 2017 - May 2020", "Manage Interpersonal relationship, culture a positive and productive environment, and efficiently and effectively handle emergency situations for 50+ dorm residents")}
					</ul>
          <h3>Educational</h3>
          <ul>
            {this.xpItem("Computer Science Major & Cyber-Security Minor", "Southwest Baptist University", "Graduated May 2020")}
          </ul>
				</div>
				<div className="Skills" style={this.props.darkmode?this.darkmodeBubble:this.lightmodeBubble}>
              <h2>Skills</h2>
              <h3>General</h3>
              <ul>
                {this.skillItem("Leadership", "Resident Assistant for Southwest Baptist University")}
                {this.skillItem("Interpersonal Communication","Resident Assistant for Southwest Baptist University.")}
                {this.skillItem("Team Player","Cyber Security Intern at Sho-Me Power")}
                {this.skillItem("Project Planning","Senior Project, Learning environment, professional environment")}
              </ul>

              <h3>Technical</h3>
              <ul>
                {this.skillItem("Java","Learning environment and personal projects")}
                {this.skillItem("Python","Learning environment, RESTful APIs and cyber-security tools")}
                {this.skillItem("C Lang","Learning environment")}
                {this.skillItem("M.I.P.S.","Assembly language learning environment")}
                {this.skillItem("Object Oriented Programming","Learning environment")}
                {this.skillItem("CentOS","ElasticSearch, lab server, and learning environmnet")}
                {this.skillItem("Kali Linux","Penetration testing and password cracking")}
                {this.skillItem("Arch Linux","Personal computer, development environment, and Linux learning environment")}
                {this.skillItem("Ubuntu","Personal computer and linux learning environment")}
                {this.skillItem("Windows 10","Personal computer, development environment, and educational learning environment.")}
                {this.skillItem("Microsoft Excel","Educational Environment. Taught it as lab instructor")}
              </ul>
            </div>
			</div>
		)
	}
	
  xpItem(title, loc, timeframe, desc, hidden){
    const hide = {
      display: hidden
    }

    return(
      <li>
        <a className="Job-Title">{title}</a>
        <a className="time">{timeframe}</a>
        <a className="Job-Location">{loc}</a>
        <a className="desc">{desc}</a>
      </li>
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
}

export default Experience;