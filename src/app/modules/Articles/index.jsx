import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Search from '../../containers/Search';
import actions from './store/actions';

class Articles extends Component {
	state = {
		listArticles: null,
		error: false,
	}

	onSearch = async (responseSearch) => {
		const { dispatch } = this.props;
		dispatch(actions.searchArticles(responseSearch));
	}

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}


	render() {
		const { listArticles, error } = this.state;

		if (error) {
			return (<div> error </div>);
		}

		return (
			<div>

				<Search
					onSearch={this.onSearch}
					parameter="userId"
					route="posts"
					textButton="Buscar"
					textPlaceholder="Buscar por..."
				/>

				{console.log(listArticles)}

			</div>

		);
	}
}

const mapStateToProps = state => ({
	articles: state.articles,
});

Articles.propTypes = {
	dispatch: propTypes.func.isRequired,
};


export default connect(mapStateToProps)(Articles);
