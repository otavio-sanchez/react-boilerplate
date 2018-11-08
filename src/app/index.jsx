import 'normalize.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './main';
import routes from '../routes';
import Header from './components/Header';
import theme from './theme';

const nameProject = 'Boilerplate React';

const App = () => (

	<ThemeProvider theme={theme}>
		<React.Fragment>
			<Header pages={routes} title={nameProject} />
			<Main routes={routes} />
		</React.Fragment>
	</ThemeProvider>

);

export default App;
