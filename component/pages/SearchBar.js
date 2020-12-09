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
function SearchBar({ addFilter }) {
    const { state, dispatch } = useContext(Context)
    const { lists } = state
    const [description, setDescription] = useState("");

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            addFilter({ type: "DESCRIPTION", value: description });
        }
    };


    return (
        <FormStyle onSubmit={handleSearch}>
            <fieldset>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Title, companies, expertise"
                    onKeyDown={handleSearch}
                />
                <button>Search</button>
            </fieldset>
        </FormStyle>
    )
}

export default SearchBar
