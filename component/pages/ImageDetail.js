import React, { useContext, useEffect } from 'react'
import { Context } from '../GithubContext'
import { Link } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import styled from 'styled-components'

const DetailStyle = styled.div`
h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #334680;
}
time {
    font-size: 12px;
    color: #B7BCCE
}
`;
function ImageDetail() {
    const { state, dispatch } = useContext(Context)
    const { description, loading, jobs } = state

    useEffect(() => {
        async function fetchDescription() {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=ruby&page=0');
            const jobDescription = await response.json();
            dispatch({ type: 'LOAD_DESCRIPTION', description: jobDescription })
        }
        fetchDescription()
    }, [])

    return (
        <div className='details'>
            {loading && <p>Loading...</p>}
            {!loading && jobs.map(job => (
                <DetailStyle key={job.id} className='detail-style'>
                    <div className='side-bar'>
                        <Link to="/">
                            <i className="ri-arrow-left-line"></i>
                            Back to search
                        </Link>
                        <div>
                            <h3>How to Apply</h3>
                            <p>{job.how_to_apply}</p>
                        </div>
                    </div>
                    <div className="content">
                        <h2>{job.title}</h2>
                        <div className>{job.type}</div>
                        <div className="job-date">
                            <i className="ri-timer-2-line"></i>
                            <time dateTime={job.created_at}>
                                {formatDistance(new Date(job.created_at), new Date())}
                            </time>
                        </div>
                        <div className="company-details">
                            {job.company_logo && (
                                <img src={job.company_logo} alt="company logo" />
                            )}
                            <h4>{job.company}</h4>
                            <div className="job-location">
                                <i class="ri-earth-fill"></i>
                                <span>{job.location}</span>
                            </div>
                        </div>
                        <div className='description'>
                            <p>{job.description}</p>
                        </div>
                    </div>
                </DetailStyle >
            )
            )
            }
        </div >
    )
}

export default ImageDetail
