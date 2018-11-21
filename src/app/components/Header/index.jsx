import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '../../../assets/images/menu-open.svg';
import MenuClosedIcon from '../../../assets/images/menu-closed.svg';

const HeaderMenu = styled.header`
  -moz-transition: all .6s ease-in-out;
  -webkit-transition: all .6s ease-in-out;
  background-color: ${props => props.style.background.color};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  height: ${props => props.style.background.height};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all .6s ease-in-out;
  width: initial;
  z-index: 1001;

  .logo{
	color: ${props => props.style.font.color};
	font-family: ${props => props.style.font.family};
	font-size: ${props => props.style.font.size};
	font-weight: 500;
	margin: 0px;
  }

  > div{
	  height: 100%;
  }

  > div > div{
	  height: 100%;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
  float: right;
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
	border-left: 1px #ccc solid;
	display: block;
	height: 100vh;
	padding: 0 20px;
	position: fixed;
	right:  ${props => (props.open ? '0px' : '-100%')};
	min-width: 320px;
	z-index: 1000;
	transition: all  0.5s ease-in-out;
  
  @media (max-width: 620px){
	&{
		width: 100%;
	}
  }


  ul{
	padding: 0px;
  }

  ul li{
	list-style: none;
	padding: 20px 20px;
	text-align: center;
  }

  .link{
	text-decoration: none;
	padding: 20px;
	color: ${props => props.style.font.color};
	transition: color 300ms ease-in-out;
  }

  .link:hover{
	text-decoration: none;
	color: ${props => props.style.font.colorHover};
  }

`;

const Overlay = styled.div`
  background-color: #333;
  opacity: ${props => (props.open ? '0.3' : '0')};
  z-index: ${props => (props.open ? '999' : '-999')};
  position: fixed;
  width: 100%;
  height: 100%;
  transition: all  300ms ease-out;
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
		const { pages, theme, title } = this.props;

		const { open } = this.state;

		return (
			<header>
				<HeaderMenu style={theme.header}>
					<Grid fluid>
						<Row middle="xs">
							<Col xs={6}>
								<h1 className="logo">{title}</h1>
							</Col>
							<Col xs={6}>

								{
									open ? <Icon src={MenuClosedIcon} title="abrir" alt="abrir" onClick={this.onClickHandler} />
										: <Icon src={MenuOpenIcon} title="fechar" alt="fechar" onClick={this.onClickHandler} />

								}

							</Col>
						</Row>
					</Grid>
				</HeaderMenu>
				<Both style={theme.header} />
				<Menu style={theme.menu} open={open}>
					<ul>
						{
							pages.map(page => (
								<li key={page.path}>
									<Link className="link" to={page.path}>{page.title}</Link>
								</li>
							))
						}
					</ul>
				</Menu>
				<Overlay open={open} />
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
