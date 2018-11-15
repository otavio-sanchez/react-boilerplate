import 'normalize.css';
import React from 'react';

import StyleComponent from './components/StyleComponent';
import Main from './main';
import routes from '../routes';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
	const nameProject = 'Boilerplate React';

	return (
		<StyleComponent>
			<Header pages={routes} title={nameProject} />
			<Main routes={routes} />
			<Footer title={nameProject} />
		</StyleComponent>
	);
};

export default App;
