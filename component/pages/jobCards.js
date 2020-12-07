import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Context } from '../GithubContext'

const JobCardStyle = styled.div`
max-width: 80%;
min-width: 80%;
margin: auto;
display: flex;
fle-direction: row;
align-items: center;
gap: 2rem;

img{
   max-width: 50px;
   max-height: 50px;
    border: 1px solid;
    border-style: none;
    border-radius: 4px;
}
`;

function jobCards() {
    const { state, dispatch } = useContext(Context)
    const { lists, loading } = state

    useEffect(() => {
        async function fetchJobList() {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
            const jobList = await response.json();
            console.log(jobList);
            dispatch({ type: 'LOAD_JSON', lists: jobList })
            console.log(lists);
        }
        fetchJobList()
    })
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && lists.map(list => (
                <JobCardStyle key={list.id}>
                    <img src={list.company_logo} />
                    <div>
                        <p>{list.location}</p>
                        <h3>{list.title}</h3>
                        <p>{list.type}</p>
                    </div>
                </JobCardStyle>
            ))}
        </div>
    )
}

export default jobCards
