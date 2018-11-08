import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const HeaderMenu = styled.div`
  -moz-transition: all .6s ease-in-out;
  -webkit-transition: all .6s ease-in-out;
  background-color: ${props => props.style.background.color};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  color: ${props => props.style.font.color};
  font-family: ${props => props.style.font.family};
  font-size: ${props => props.style.font.size};
  height: ${props => props.style.background.height};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all .6s ease-in-out;
  width: initial;
  z-index: 10;

  > div{
	  height: 100%;
  }

  > div > div{
	  height: 100%;
  }
`;

const Both = styled.div`
	position: relative;
	height: ${props => props.style.background.height};
	z-index: -1;
`;

const Menu = styled.nav`
	background-color: ${props => props.style.background.color};
	font-size: ${props => props.style.font.size};
	color: ${props => props.style.font.color};
	display: block;
	height: 100vh;
	padding: 0 20px;
	position: fixed;
	right: 0px;

  ul{
	padding: 0px;
  }

  ul li{
	list-style: none;
  }
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
		const { pages, theme } = this.props;


		return (
			<header>
				<HeaderMenu style={theme.header} onClick={this.onClickHandler}>
					<Grid fluid>
						<Row middle="xs">
							<Col xs={6}>
								<div>Logo</div>
							</Col>
							<Col xs={6}>
								<div>
									{open}
								</div>
							</Col>
						</Row>
					</Grid>
				</HeaderMenu>
				<Both style={theme.header} />
				<Menu style={theme.menu}>
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
	theme: propTypes.instanceOf(Object).isRequired,
	pages: propTypes.instanceOf(Array).isRequired,
};

Header.defaultProps = {
	title: 'Boilerplate',
};

export default withRouter(withTheme(Header));
