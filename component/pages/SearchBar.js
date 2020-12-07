import React from 'react'
import styled from 'styled-components'

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
    return (
        <FormStyle>
            <fieldset>
                <input
                    placeholder=""
                    type="text"
                />
                <button>Search</button>
            </fieldset>
        </FormStyle>
    )
}

export default SearchBar
