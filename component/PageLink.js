import React from 'react'
import styled from 'styled-components'
import JobCard from './pages/jobCards'
import FilterLocation from './pages/filterLocation'
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


function PageLink() {
    return (
        <div className='App'>
            <header>
                <SearchBar />
            </header>
            <MainStyle>
                <FilterLocation className='location' />
                <JobCard className='jobCard' />
            </MainStyle>
        </div>
    )
}

export default PageLink
