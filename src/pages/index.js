import React from "react"
import Navigation from '../components/navigation.js'
import Header from '../components/header.js'
import Projects from '../components/projects.js'
import About from '../components/about.js'
import Skills from '../components/skills.js'
import Footer from '../components/footer.js'
import '../styles/global.css'

const Home = () => {
	return (
		<div class="container">
			<Navigation/>
			<Header/>
			<Projects/>
			<About/>
			<Skills/>
			<Footer/>
		</div>
	)
}

export default Home
