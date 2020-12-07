import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../GithubContext'

const LocationStyle = styled.form`
display: flex;
flex-direction: column;

`;

function Location() {
    const { state, dispatch } = useContext(Context)
    const { lists } = state
    const [checked, setChecked] = useState(false)

    function filteredJobByTitle() {

    }


    return (
        <LocationStyle>
            <label>
                <input
                    type="checkBox"
                />{''}
                Full time
            </label>
            <label>Location</label>
            <input type='text' placeholder="City, state, zip code or country" />
            <label>
                <input
                    name="location"
                    type="checkbox"
                    value=""
                />{''}
                London
            </label>
            <label>
                <input
                    name="location"
                    type="checkbox"
                    value=""
                />{''}
                Amsterdam
            </label>
            <label>
                <input
                    name="location"
                    type="checkbox"
                    value=""
                />{''}
                New York
            </label>
            <label>
                <input
                    name="location"
                    type="checkbox"
                    value=""
                />{''}
                Berlin
            </label>
        </LocationStyle>
    )
}

export default Location
