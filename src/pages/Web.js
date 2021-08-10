import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Register from './Register';
import OurTeam from './OurTeam';
import Volunteer from './Volunteer';
import ThankYou from './ThankYou';
import Blog from './Blog';
import NotFound from './NotFound';
import logo from '../assets/logo.svg';
import IsMobile from '../IsMobile';
import Help from './Help';
import Footer from '../components/Footer/Footer';
import './Navbar.css';
import { BrowserRouter as R, HashRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';

function Web()
{
    const [navbar_open, SetNavbarOpen] = useState(false);

    return(
        <>
        <Router>
            <nav>
                <div id = 'navbar-wrapper'>
                    <Link to = '/'><img id = 'logo' src = {logo} /></Link>
                    {!IsMobile() && <ul id = "centered-navbar">
                        <li>
                            <Link to = '/about'>About</Link>
                        </li>
                        <li>
                            <Link to = '/register'>Register</Link>
                        </li>
                        <li>
                            <Link to = '/volunteer'>Volunteer</Link>
                        </li>
                        <li>
                            <Link to = '/our-team'>Our Team</Link>
                        </li>
                        
                        <li>
                            <Link to = '/help'>Help</Link>
                        </li>
                        <li>
                            <Link to = '/blog'>Blog</Link>
                        </li>
                    </ul>}
                    {
                    IsMobile() &&
                    <div onClick = {() => SetNavbarOpen(!navbar_open)} id = "navbar-mobile-btn">
                        &#9776;
                    </div>
                    }
                </div>
                {
                (IsMobile() && navbar_open) &&
                <div id = "mobile-navbar-dropdown-wrapper">
                    <ul id = "mobile-navbar-dropdown">
                        <li>
                            <Link to = '/about'>About</Link>
                        </li>
                        <li>
                            <Link to = '/register'>Register</Link>
                        </li>
                        <li>
                            <Link to = '/volunteer'>Volunteer</Link>
                        </li>
                        <li>
                            <Link to = '/our-team'>Our Team</Link>
                        </li>
                        
                        <li>
                            <Link to = '/help'>Help</Link>
                        </li>
                        <li>
                            <Link to = '/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
                }
            </nav>
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route path = "/about">
                    <About />
                </Route>
                <Route path = "/register">
                    <Register />
                </Route>
                <Route path = "/our-team">
                    <OurTeam />
                </Route>
                <Route path = "/volunteer">
                    <Volunteer />
                </Route>
                <Route path = "/thank-you">
                    <ThankYou />
                </Route>
                <Route path = "/help">
                    <Help />
                </Route>
                <Route path = "/blog">
                    <Blog />
                </Route>
                <Route path = "*" exact = {true} component = {NotFound} />
            </Switch>
            <Footer />
        </Router>
        <R>
            <Switch>
                <Redirect from = "/about" to = "/#/about" />
                <Redirect from = "/register" to = "/#/register" />
                <Redirect from = "/our-team" to = "/#/our-team" />
                <Redirect from = "/volunteer" to = "/#/volunteer" />
                <Redirect from = "/thank-you" to = "/#/thank-you" />
                <Redirect from = "/help" to = "/#/help" />
                <Redirect from = "/blog" to = "/#/blog" />
            </Switch>
        </R>
        </>
    )
}

export default Web