import React, {useState} from 'react'

const Navigation =() => {
	const [menuState, setMenuState] = useState(false);
	
	return (
	<div class="nav">
		<div class="left">
			<a href="/#home">Finn Moore</a>
		</div>
		<div class={menuState ? "menu" : "right"}>	
			<a href="/#projects">Projects</a>
			<a href="/#about">About</a>
			<a href="/#skills">Skills</a>
			<a href="/#contact">Contact</a>
		</div>
		<div class="hamburger"
		 onClick={()=>setMenuState(!menuState)}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
	)
}

export default Navigation
