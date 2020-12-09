import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../GithubContext'

const LocationStyle = styled.form`
display: flex;
flex-direction: column;
`;

function filterLocation() {
    const { state, dispatch } = useContext(Context)
    const { jobs, fulltime } = state
    const [selectedCity, setSelectedCity] = useState(null)
    const [location, setLocation] = useState("");

    const addFilter = (filter) => {
        switch (filter.type) {
            case "LOCATION":
                dispatch(filter.value);
                break;
            case "FULLTIME":
                dispatch(filter.value);
                break;
            case "DESCRIPTION":
                dispatch(filter.value);
                break;
        }
    };

    const handleCity = (location) => {
        if (selectedCity && location.id === selectedCity.id) {
            setSelectedCity(null);
            addFilter({ type: "LOCATION", value: "" });
        } else {
            setSelectedCity(location);
            addFilter({ type: "LOCATION", value: location.name });
        }
    };

    const handleLocation = (e) => {
        if (e.key === "Enter") {
            setSelectedCity(null);
            addFilter({ type: "LOCATION", value: location });
        }
    };

    const handleClick = () => {
        dispatch(!fulltime);
        addFilter({ type: "FULLTIME", value: false });
    };
    useEffect(() => {
        setSelectedCity(locations[0]);
        addFilter({ type: "CITY", value: locations[0] });
    }, []);


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
                    type="checkbox"
                    id="fulltime"
                    checked={fulltime}
                    onChange={handleClick}
                />
                Full time
            </label>
            <label>Location</label>
            <input
                type="text"
                id="city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleLocation}
                placeholder="City, state, zip code or country"
            />
            <div className="cities">
                {locations.map((location) => (
                    <div className="checkbox" key={location.id}>
                        <input
                            type="checkbox"
                            checked={selectedCity ? location.id === selectedCity.id : false}
                            id={location.id}
                            onChange={() => handleCity(location)}
                        />
                        <label htmlFor={location.id}>{location.name}</label>
                    </div>
                ))}
            </div>
        </LocationStyle>
    )
}

export default filterLocation
