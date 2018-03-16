import React, { Component } from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Sidebar from './presentational/Sidebar';
import Main from './containers/Main';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/cocktails" component={Main} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
