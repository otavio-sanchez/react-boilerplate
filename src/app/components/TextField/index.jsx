import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TextFieldDefault = styled.input`
    border: 1px solid #fff;
    width: 100%;
`;


class TextField extends Component {
    state = { value: '' }

	handleChange = (event) => {
		const { onChange } = this.props;
		this.setState({
			value: event.target.value,
		}, () => {
			const { value } = this.state;

			onChange(value);
		});
	}

	render() {
		const { value } = this.state;
		const { placeholder } = this.props;

		return (
			<TextFieldDefault type="text" placeholder={placeholder} onChange={this.handleChange} value={value} />
		);
	}
}

TextField.propTypes = {
	onChange: propTypes.func.isRequired,
	placeholder: propTypes.string,
};

TextField.defaultProps = {
	placeholder: 'input',
};

export default TextField;
