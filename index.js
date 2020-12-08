import React from 'react'
import ReactDOM from 'react-dom'
import { GithubContext } from './component/GithubContext'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './component/App'

ReactDOM.render(
    <GithubContext>
        <Router>
            <App />
        </Router>
    </GithubContext>
    , document.getElementById("root"));



