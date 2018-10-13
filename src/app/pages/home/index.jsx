import React, { Component } from 'react';
import Search from '../../containers/Search';

class Home extends Component {
	state = {
		loading: false,
	}

	componentWillMount() {
		this.setState({
			loading: true,
		});
	}

	render() {
		const { loading } = this.state;

		return (
			<div>
				<Search onSearch={(value) => { console.log(value); }} />
				{
					loading ? <div> Home </div> : <div>Carregando</div>
				}
			</div>
		);
	}
}

export default Home;
