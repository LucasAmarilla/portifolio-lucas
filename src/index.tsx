import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";
import './index.css'
import Projects from './pages/MyProjects';
import Nav from './components/Nav';
import Home from './pages/Home';



const root = document.getElementById('root')

render(() =>

    <Router root={Nav}>
        <Route path="/" component={Home} />
        <Route path="/portifolio-lucas" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/portifolio-lucas/projects" component={Projects} />

    </Router>
    , root!)
