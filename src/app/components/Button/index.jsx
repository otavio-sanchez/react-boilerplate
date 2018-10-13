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
	onClickHandler = () => {
		const { onClick } = this.props;
		onClick();
	}

	render() {
		const { children, primary } = this.props;

		return (
			<ButtonDefault onClick={this.onClickHandler} primary={primary}>
				{ children }
			</ButtonDefault>
		);
	}
}

Button.propTypes = {
	onClick: propTypes.func.isRequired,
	children: propTypes.string.isRequired,
	primary: propTypes.bool,
};

Button.defaultProps = {
	primary: true,
};

export default Button;
