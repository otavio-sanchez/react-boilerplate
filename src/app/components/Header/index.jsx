import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

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


class Header extends Component {
	state = {
		open: false,
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
					{console.log(pages)}
					<div>
						<div>Logo</div>
						{' '}
						<div>
							{' '}
							{open}
							{' '}
						</div>
					</div>
				</HeaderMenu>
				<Both />
			</header>
		);
	}
}

Header.propTypes = {
	pages: propTypes.instanceOf(Array).isRequired,
};

export default Header;
