import React from "react"
import {Helmet} from 'react-helmet'

const Header = () => {
	return(
		<div id="header" className="header">
			<Helmet title="Finn Moore | Portfolio"/>
			<h1>Hello, my name is Finn</h1>
			<p>I&#39;m a Full Stack Software Engineer</p>
		</div>
	)
}

export default Header
