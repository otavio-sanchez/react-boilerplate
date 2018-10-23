import React from 'react';
import propTypes from 'prop-types';


const Loading = ({ children, on }) => {
	if (on) {
		return (
			<div>Carregando</div>
		);
	}
	return (
		<div>
			{ children }
		</div>
	);
};

Loading.propTypes = {
	on: propTypes.bool.isRequired,
	children: propTypes.element.isRequired,
};


export default Loading;
