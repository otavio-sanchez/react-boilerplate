import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Articles from '../../modules/Articles';

const HomePage = styled.div`
	  min-height: 100vh;
	  padding-top: 20px;
	  padding-bottom: 20px;
`;


const Home = () => (
	<HomePage>
		<Grid fluid>
			<Row>
				<Col xs={12}>
					<Articles />
				</Col>
			</Row>
		</Grid>
	</HomePage>
);

export default Home;
