import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../GithubContext'

const LocationStyle = styled.form`
display: flex;
flex-direction: column;

`;

function Location() {
    const { state, dispatch } = useContext(Context)
    const { lists, fullTime } = state
    const [fullTime, setFulltimes] = useState(true)

    const handleClick = () => {
        setFulltimes(!fullTime);
        dispatch({ type: "FULL_TIME", value: true });
    };
    useEffect(() => {
        async function jobFullTime() {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location');
            const filterFullTime = await response.json();
            dispatch({ type: 'LOCATION', fullTime: filterFullTime })
        }
        jobFullTime()
    }, [])

    const locations = [
        { id: 1, name: "London" },
        { id: 2, name: "Amsterdam" },
        { id: 3, name: "New York" },
        { id: 4, name: "Berlin" }
    ]



    return (
        <LocationStyle onSubmit={handleClick}>
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
