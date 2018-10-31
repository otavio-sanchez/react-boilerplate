import 'normalize.css';
import React from 'react';
import Main from './main';
import routes from '../routes';
import Header from './components/Header';

const nameProject = 'Boilerplate React';

const App = () => (
	<React.Fragment>
		<Header pages={routes} title={nameProject} />
		<Main routes={routes} />
	</React.Fragment>
);

export default App;
