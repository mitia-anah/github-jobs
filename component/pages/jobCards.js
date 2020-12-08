import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Context } from '../GithubContext'

const JobCardStyle = styled.div`
display: flex;
fle-direction: row;
align-items: center;
gap: 2rem;
border: 1px solid;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
border-radius: 4px;
border-style: none;
margin-block-end: 1rem;
padding: 1rem;

img{
   max-width: 50px;
   max-height: 50px;
    border: 1px solid;
    border-style: none;
    border-radius: 4px;
}
`;

const DivStyle = styled.div`
.type{ 
    border: 1px solid;
    font-size: 12px;
    line-height: 14px;
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    max-width: 32%;
  padding: 0.3rem;
}
}
`;
function jobCards() {
    const { state, dispatch } = useContext(Context)
    const { jobs, loading } = state

    useEffect(() => {
        async function fetchJobList() {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
            const jobList = await response.json();
            dispatch({ type: 'LOAD_JSON', jobs: jobList })
        }
        fetchJobList()
    }, [])
    return (
        <div >
            {loading && <p>Loading...</p>}
            {!loading && jobs.map(list => (
                <JobCardStyle key={list.id}>
                    <Link to='/imagedetail'>
                        <img src={list.company_logo} />
                    </Link>
                    <DivStyle>
                        <p>{list.location}</p>
                        <h3>{list.title}</h3>
                        <p className="type">{list.type}</p>
                    </DivStyle>
                </JobCardStyle>
            ))}
        </div>
    )
}

export default jobCards
