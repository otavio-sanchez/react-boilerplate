import React, { Component } from 'react';
import propTypes from 'prop-types';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import api from '../../../helpers/api';

class Search extends Component {
	state = {
		value: null,
		searchValid: false,
	}

	isNotValid= value => value === null || value === ''

	onChangeText = (value) => {
		this.setState({
			value,
			searchValid: this.isNotValid(value),
		});
	}

	onSearch = (event) => {
		event.preventDefault();
		const { onSearch, parameter, route } = this.props;
		const { value } = this.state;

		if (!this.isNotValid(value)) {
			const request = api.get(`${route}?${parameter}=${value}`);
			onSearch(request);
		}
	}

	render() {
		const { textPlaceholder, textButton } = this.props;

		const { searchValid } = this.state;

		return (
			<form>
				<TextField placeholder={textPlaceholder} onChange={this.onChangeText} />
				<Button type="submit" disabled={searchValid} onClick={this.onSearch}>
					{textButton}
				</Button>
			</form>
		);
	}
}

Search.propTypes = {
	textButton: propTypes.string,
	textPlaceholder: propTypes.string,
};

Search.defaultProps = {
	textButton: 'Search',
	textPlaceholder: 'Search',
};

export default Search;
