import React, { Component } from 'react';
import propTypes from 'prop-types';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

class Search extends Component {
	state = {
		value: null,
	}

	onChangeText = (value) => {
		this.setState({
			value,
		});
	}

	onSearch = (event) => {
		event.preventDefault();
		const { onSearch } = this.props;
		const { value } = this.state;
		onSearch(value || '');
	}

	render() {
		const { placeholder, textButton } = this.props;

		return (
			<form>
				<TextField placeholder={placeholder} onChange={this.onChangeText} />
				<Button type="submit" onClick={this.onSearch}>
					{textButton}
				</Button>
			</form>
		);
	}
}

Search.propTypes = {
	textButton: propTypes.string,
	placeholder: propTypes.string,
};

Search.defaultProps = {
	textButton: 'Search',
	placeholder: 'Search',
};

export default Search;
