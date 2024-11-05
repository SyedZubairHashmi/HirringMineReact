import React from 'react'
import Header from './Header'
import JobsCard from './JobsCard'
import CategoryCard from './CategoryCard'
import SearchPage from './SearchPage'
import "../App.css"

function Home() {
  return (
    <div>
        
        <Header/>
        <SearchPage/>
        <CategoryCard/>
        <JobsCard/>

    </div>
  )
}

export default Home