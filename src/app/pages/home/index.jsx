import React, { Component } from 'react';

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
				{
					loading ? <div> Home </div> : <div>Carregando</div>
				}
			</div>
		);
	}
}

export default Home;
