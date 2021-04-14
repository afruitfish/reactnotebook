import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './home'
import Detail from './detail'
const RouterMap = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/detail">
                    <Detail />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterMap;