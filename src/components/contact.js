import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name: '',
			email: '',
			message: '',
			key: process.env.GATSBY_API_KEY
		}
	}

	handleSubmit(e){
		e.preventDefault();
		axios({
			method: 'POST',
			url: process.env.GATSBY_API_PATH,
			headers: {
				'content-type': 'application/json'},
			data: this.state})
			.then(result => {
				if (result.data.success===1){
					alert('Message Sent.');
					this.resetForm()
				} else if (!(result.data.errors)){
					alert('Message Failed to Send.')
				} else {
					alert(result.data.errors)
				} 
				});
	}

	resetForm(){
		this.setState({name: '', email: '', message: ''})
		document.getElementById("contact-form").reset();
	}

	setName(e){
		this.setState({name: e.target.value})
	}

	setEmail(e){
		this.setState({email: e.target.value})
	}

	setMessage(e){
		this.setState({message: e.target.value})
	}

	render () {
		return (
		<div id="contact">
		<form id="contact-form" className="contact-form" onSubmit={this.handleSubmit.bind(this)}>
			<input type="text"placeholder="Name"onChange={this.setName.bind(this)}/>
			<input type="text"placeholder="Email"onChange={this.setEmail.bind(this)}/>
			<input type="text"placeholder="Message"onChange={this.setMessage.bind(this)}/>
			<button type="submit">Submit</button>
		</form>
		</div>
		)
	}
}

export default Contact
