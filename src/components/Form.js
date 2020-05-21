import React from 'react';

class Form extends React.Component {
  constructor(props) {
	super(props);
	this.state = { message: '', name: '', email: '' };
	this.handleChangeEmail = this.handleChangeEmail.bind(this);
	this.handleChangeName = this.handleChangeName.bind(this);
	this.handleChangeMessage = this.handleChangeMessage.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="contact-form">
			<div>
				<input type="text" onChange={this.handleChangeName} placeholder="Your Name" required value={this.state.name}/>
				<input type="text" onChange={this.handleChangeEmail} placeholder="Your E-Mail" required value={this.state.email}/>
			</div>
    	<div>
      	<textarea
        	id="mailing-message"
        	name="mailing-message"
        	onChange={this.handleChangeMessage}
        	placeholder="Message to be sent to Nicholas Crockett"
        	required
        	value={this.state.message}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

	handleChangeEmail(event){
		console.log(event);
		this.setState({email: event.target.value})
	}

	handleChangeName(event){
		console.log(event);
		this.setState({name: event.target.value})
	}

  handleChangeMessage(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit (event) {
		const templateId = 'formsubmission';

		this.sendMessage(templateId, {message: this.state.message, name: this.state.name, email: this.state.email})
	}

	sendMessage (templateId, variables) {
		window.emailjs.send(
			'gmail', templateId,
			variables
			).then(res => {
				console.log('Email successfully sent!')
			})
		// Handle errors here however you like, or use a React error boundary
		.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
	}
}

export default Form;