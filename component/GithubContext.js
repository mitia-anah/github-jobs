import React, { createContext, useEffect, useReducer } from 'react'
const Context = createContext()

function GithubContext({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOAD_JSON': {
                return {
                    ...state,
                    loading: false,
                    jobs: action.jobs
                }
            }
            case 'LOAD_DETAILS': {
                return {
                    ...state,
                    loading: false,
                    details: action.details
                }
            }
            case 'FULL_TIME': {
                const jobFullTimes = state.job.map(fullTimes => {
                    if (fullTimes.id === action.id) {
                        return {
                            ...fullTimes,
                            fullTime: fullTimes.filter(time => time.type !== state.jobFullTimes),
                        };
                    }
                    return fullTimes;
                });
                return {
                    ...state,
                    fullTime: jobFullTimes,
                };
            }
            default:
                break;
        }
        return state
    }, {
        loading: true,
        jobs: [],
        details: '',
        fullTime: true
    })
    return (
        <Context.Provider
            value={{ state, dispatch }}
        >
            {children}
        </Context.Provider>
    )

}
export { GithubContext, Context }
