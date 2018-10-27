import 'normalize.css';
import React from 'react';
import Main from './main';
import routes from '../routes';
import Header from './components/Header';

const App = () => (
	<React.Fragment>
		<Header pages={routes} />
		<Main routes={routes} />
	</React.Fragment>
);

export default App;
