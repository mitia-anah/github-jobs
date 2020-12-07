import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../GithubContext'

const FormStyle = styled.form`
max-width: 60%;
min-width: 60%;
margin: auto;
padding: 2rem;
fieldset {
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
input {
    border-style: none;
    width: 100%;
}
button {
    background: #1E86FF;
    border-radius: 4px;
    color: #ffffff;
    width: 100px;
    
    padding:0.5rem;
    border-style: none;
}
`;
function SearchBar() {
    const { state, dispatch } = useContext(Context)
    const { lists } = state
    const [filterJob, setFilterJob] = useState('')


    const filterJobByTitle = (e) => {
        e.preventDefault();
        const jobTitle = lists.filter(job => {
            return job.toLowerCase() === e.target.value.toLowerCase();
        })
        dispatch({ type: 'SEARCH_FOR_JOBS', jobTitle })
        console.log(jobTitle);
    }
    return (
        <FormStyle onSubmit={filterJobByTitle}>
            <fieldset>
                <input
                    placeholder="Title, companies, expertise or benefits"
                    value={filterJob}
                    type="text"
                    onChange={e => setFilterJob(e.target.value)}
                />
                <button>Search</button>
            </fieldset>
        </FormStyle>
    )
}

export default SearchBar
