import React, { createContext, useEffect, useReducer } from 'react'
const Context = createContext()

function GithubContext({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOAD_JSON': {
                return {
                    ...state,
                    loading: false,
                    lists: action.lists
                }
            }
            case 'SEARCH_FOR_JOBS': {
                if (action.type === "SEARCH_FOR_JOBS") {
                    return state.map(job => {
                        if (job.id !== action.lists.id) return job
                    })
                }
            }

            default:
                break;
        }
    }, {
        loading: true,
        lists: []
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
