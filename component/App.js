import React from 'react'
import PageLink from './PageLink'
import { Switch, Route } from 'react-router-dom'
import JobDetail from './pages/jobDetail'


function App() {
    return (
        <div>
            <h1>Github Jobs</h1>
            <Switch>
                <Route exact path='/'>
                    <PageLink />
                </Route>
                <Route path='/job/:jobId'>
                    <JobDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App
