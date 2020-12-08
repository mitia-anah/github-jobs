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
            case 'LOAD_DESCRIPTION': {
                return {
                    ...state,
                    loading: false,
                    description: action.description
                }
            }

            default:
                break;
        }
    }, {
        loading: true,
        jobs: [],
        description: ''
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
