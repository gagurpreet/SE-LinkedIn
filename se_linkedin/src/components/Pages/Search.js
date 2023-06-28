import React, { useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'

const SearchComponent = ({ posts }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filteredPosts, setFilteredPosts]= useState([])
	
	const handleSearch = (userInput) => {
		setSearchTerm(userInput)
	const filtered = posts.filter(post => post.name.toLowerCase().includes(userInput.toLowerCase()))
	setFilteredPosts(filtered)
	}

	return(
		<DefaultLayout>
			<div style={{ textAlign: 'center' }}>
				<h2 style={{ textDecoration: 'Highlight', fontFamily:"Bold", color:'blue'}}>Search</h2>
				<input type="text"
					value={searchTerm} 
					onChange={(e) => handleSearch(e.target.value)}
					placeholder=' Search person by name   '
				/>	
				{filteredPosts.map((post, index) => (
						<div key={index}>{post.name}</div>
				))}			
			</div>
		</DefaultLayout>
	)
}

export default SearchComponent;