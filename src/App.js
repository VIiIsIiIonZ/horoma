import {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Users from './Users';
import './App.css';

export default function App() {

    useEffect(() => {
        document.title = "Horoma's Website"
    }, [])

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/horoma/">Home</Link>
                        </li>
                        <li>
                            <Link to="/horoma/about">About</Link>
                        </li>
                        <li>
                            <Link to="/horoma/user">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/horoma/about">
                        <About />
                    </Route>
                    <Route path="/horoma/user">
                        <Users />
                    </Route>
                    <Route path="/horoma/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}