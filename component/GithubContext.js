import React, { createContext, useEffect, useReducer, useState } from 'react'
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
            case 'FULLTIME': {
                return { ...state, fulltime: action.fulltime }
            }
            case 'LOCATION': {
                return { ...state, location: action.location }
            }
            default:
                return state
        }
    }, {
        loading: true,
        jobs: [],
        details: '',
        description: '',
        location: [],
        fulltime: true
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
