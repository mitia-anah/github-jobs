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
