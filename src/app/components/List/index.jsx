import React from 'react';
import propTypes from 'prop-types';

const List = ({
	data, header, body, id,
}) => (
	<ul>
		{
			data && data.length !== 0
				? data.map(item => (
					<li key={item[id]}>
						<div>{item[header]}</div>
						<div>{item[body]}</div>
					</li>))
				: <li>Nenhum item encontrado.</li>
		}
	</ul>
);

List.propTypes = {
	header: propTypes.string.isRequired,
	body: propTypes.string.isRequired,
	data: propTypes.instanceOf(Array).isRequired,
};

export default List;
