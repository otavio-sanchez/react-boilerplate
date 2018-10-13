import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ButtonDefault = styled.button`
    background-color:  ${props => (props.primary ? 'blue' : 'white')};
    color: ${props => (props.primary ? 'white' : 'blue')};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 1px solid blue;
    border-radius: 5px;
`;


class Button extends Component {
	onClickHandler = (event) => {
		const { onClick } = this.props;
		onClick(event);
	}

	render() {
		const { children, primary, type } = this.props;

		return (
			<ButtonDefault type={type} onClick={this.onClickHandler} primary={primary}>
				{ children }
			</ButtonDefault>
		);
	}
}

Button.propTypes = {
	onClick: propTypes.func.isRequired,
	children: propTypes.string.isRequired,
	primary: propTypes.bool,
	type: propTypes.string,
};

Button.defaultProps = {
	primary: true,
	type: 'button',
};

export default Button;
