import React from 'react';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      osList: ["CentOS", "Kali","Arch","Ubuntu","Windows 10"]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-Navigation">
          <h1>Nicholas Crockett</h1>
        </div>
        <div className="App-Body">
          <div className="Bio">
            <p> Graduating senior at SBU studying Computer Science and Cyber Security. Passionate about solving problems and ensuring the security and well-being of others.
            </p>
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
        </div>
      </div>
    );
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
export default App;