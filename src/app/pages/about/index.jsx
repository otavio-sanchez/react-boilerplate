import React, { Component } from 'react';

class About extends Component {
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
					loading ? <div> About </div> : <div>Carregando</div>
				}
			</div>
		);
	}
}

export default About;
