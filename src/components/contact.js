import React from 'react'

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name: '',
			email: '',
			message: ''
		}
	}

	handleSubmit(e){
		e.preventDefault();
		fetch('INSERT WEBSERVER ADDRESS', {
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then((response)=>{
			if (response.json().status === 'sucess'){
				alert("Message Sent.");
			} else if (response.json().status === 'fail'){
				alert("Message Faileed.");
			}
		})
	}

	resetForm(){
		this.setState({name: '', email: '', message: ''})
	}

	render () {
		return (
		<form class="contact-form">
			<input type="text"placeholder="Name"/>
			<input type="text"placeholder="Email"/>
			<input type="text"placeholder="Message"/>
			<button type="submit">Submit</button>
		</form>
		)
	}

	onNameChange(event){
		this.setState({name: event.target.value})
	}

	onMessageChange(event){
		this.setState({message: event.target.value})
	}

	onEmailChange(event){
		this.setState({email: event.target.value})
	}
}

export default Contact
