import React from 'react'
import ReactDOM from 'react-dom'
import { GithubContext } from './component/GithubContext'

import App from './component/App'

ReactDOM.render(
    <GithubContext>
        <App />
    </GithubContext>
    , document.getElementById("root"));



