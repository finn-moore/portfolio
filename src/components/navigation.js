import React, {useState} from 'react'

const Navigation =() => {
	return (
	<div class="nav">
		<div class="left">
			<a href="/#home">Finn Moore</a>
		</div>
			<div class="right">	
			<a href="/#projects">Projects</a>
			<a href="/#about">About</a>
			<a href="/#skills">Skills</a>
			<a href="/#contact">Contact</a>
			<button>Open</button>
		</div>
	</div>
	)
}

export default Navigation
