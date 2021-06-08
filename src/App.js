import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import './App.css';

import { Header, Footer, NotFound } from './Shared';

import Home from './Home/Home';
import CV from './CV/CV';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
	const location = useLocation();
	return (
		<div id='main'>
			<Header path={location.pathname}/>
			<div id='page'>
				<Switch>
					<Route exact path="/"><Home/></Route>
					<Route exact path="/resume"><CV/></Route>
					<Route exact path="/projects"><Projects/></Route>
					<Route exact path="/contact"><Contact /></Route>
					<Route component={NotFound} />
				</Switch>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
