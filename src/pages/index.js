import React from "react"
import Navigation from '../components/navigation.js'
import Header from '../components/header.js'
import Projects from '../components/projects.js'
import About from '../components/about.js'
import Skills from '../components/skills.js'
import Contact from '../components/contact.js'
import Footer from '../components/footer.js'
import '../styles/main.css'

const Home = () => {
	return (
		<div><Navigation/>
		<div class="container">
			<Header/>
			<Projects/>
			<About/>
			<Skills/>
			<Contact/>
			<Footer/>
		</div></div>
	)
}

export default Home
