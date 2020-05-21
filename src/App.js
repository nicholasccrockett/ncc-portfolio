import React from 'react';
import './AppDark.scss';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Navigation from './components/Nav.js';
import Experience from './components/Experience';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      openPage: "Home",
      darkMode: true
    };

    this.dark={
      color: "white"
    };

    this.style={
      color: "white",
      backgroundColor: "#3a3a3a"
    };

    this.switchModeCallback = this.switchModeCallback.bind(this);
    this.updatePageCallback = this.updatePageCallback.bind(this);
  }

  displayControl(){ 
    switch(this.state.openPage){
      case "Home":
        return <Home darkmode={this.state.darkMode}/>
      case "ContactMe":
        return <Contact darkmode={this.state.darkMode}/>
      case "Experience":
        return <Experience darkmode={this.state.darkMode}/>
      default:
        return <h1 style={this.darkMode? this.dark:this.light}>Page Not Found</h1>
    }
  }

  updatePageCallback = (str) => {
    console.log("update Page Callback", str);
    this.setState({openPage: str});
    console.log(this.state)
  }

  switchModeCallback(){
    this.setState({darkMode: !this.state.darkMode})
  }

  render() {
    return (
      <div className="App">
        <Navigation page={this.state.openPage} updatePage={this.updatePageCallback} darkmode={this.state.darkMode} switchMode={this.switchModeCallback}/>
        {this.displayControl()}
      </div>
    );
  }
}
export default App;