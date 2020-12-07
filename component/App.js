import React from 'react'
import styled from 'styled-components'
import JobCard from './pages/jobCards'
import Location from './pages/Location'
import SearchBar from './pages/SearchBar'

const MainStyle = styled.main`
display: flex;
gap: 3rem;
.location {
    flex-basis: 30%;
}
.jobCard {
    flex-basis: 40%;
}
`;


function App() {
    return (
        <div className='App'>
            <h1>Github Jobs</h1>
            <header>
                <SearchBar />
            </header>
            <MainStyle>
                <Location className='location' />
                <JobCard className='jobCard' />
            </MainStyle>
        </div>
    )
}

export default App
