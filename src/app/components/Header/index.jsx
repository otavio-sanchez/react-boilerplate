import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const HeaderMenu = styled.div`

	width: 100%;
	height: 80px;
	display: block;
	position: fixed;
	top:0;
	left: 0;
	background-color: red;
`;

const Both = styled(HeaderMenu)`
	position: relative;
	z-index: -1;
`;

const Menu = styled.nav`
	display: block;
`;


class Header extends Component {
	state = {
		open: false,
	}


	componentWillReceiveProps() {
		const { pages, title } = this.props;

		const currentPage = pages.filter(page => this.getLocationPage(page));

		document.title = `${title} - ${currentPage.length !== 0 ? currentPage[0].title : ''}`;
	}

	getLocationPage = (page) => {
		const { history } = this.props;

		const { location } = history;

		return page.path === location.pathname && page.title;
	}

	onClickHandler = () => {
		const { open } = this.state;
		this.setState({
			open: !open,
		});
	}

	render() {
		const { open } = this.state;
		const { pages } = this.props;
		return (
			<header>
				<HeaderMenu onClick={this.onClickHandler}>
					<Grid fluid>
						<Row>
							<Col xs={12}>

								<div>
									<div>Logo</div>
									{' '}
									<div>
										{' '}
										{open}
										{' '}
									</div>
								</div>
							</Col>
						</Row>
					</Grid>
				</HeaderMenu>
				<Both />
				<Menu>
					<ul>
						{
							pages.map(page => (
								<li key={page.path}>
									<Link to={page.path}>{page.title}</Link>
								</li>
							))
						}
					</ul>
				</Menu>
			</header>
		);
	}
}

Header.propTypes = {
	title: propTypes.string,
	pages: propTypes.instanceOf(Array).isRequired,
};

Header.defaultProps = {
	title: 'Boilerplate',
};

export default withRouter(Header);
