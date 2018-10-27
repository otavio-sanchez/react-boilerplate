import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Articles from '../../modules/Articles';

const Home = () => (

	<Grid fluid>
		<Row>
			<Col xs={12}>
				<Articles />
			</Col>
		</Row>
	</Grid>


);

export default Home;
