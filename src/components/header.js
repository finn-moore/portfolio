import React from "react"
import {useStaticQuery, graphql} from 'gatsby'

const Header = () => {
	const data = useStaticQuery(graphql`
	query {
		site {
			siteMetadata {
				name
			}
		}
	}`)

	return (<h1>{data.site.siteMetadata.name}</h1>)
}

export default Header
