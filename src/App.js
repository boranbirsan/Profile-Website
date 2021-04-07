import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import './App.css';

import Header from './Shared/Header';
import Footer from './Shared/Footer';

import Home from './Home/Home';
import CV from './CV/CV';
import NotFound from './Shared/NotFound';

function App() {
	const location = useLocation();
	return (
		<div id='main'>
			<Header path={location.pathname}/>
			<Switch>
				<Route exact path="/"><Home/></Route>
				<Route exact path="/resume"><CV/></Route>
				<Route exact path="/projects"></Route>
				<Route exact path="/contact"></Route>
				<Route component={NotFound} />
			</Switch>
			<Footer/>
		</div>
	);
}

export default App;