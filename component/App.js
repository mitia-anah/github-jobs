import React from 'react'
import JobCard from './pages/jobCards'
import SearchBar from './pages/SearchBar'

function App() {
    return (
        <div className='App'>
            <h1>Github Jobs</h1>
            <header>
                <SearchBar />
            </header>
            <JobCard />
        </div>
    )
}

export default App
