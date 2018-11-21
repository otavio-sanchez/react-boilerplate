import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ListComponent = styled.ul`
	list-style: none;
	padding: 0;
`;

const Item = styled.article`
	padding: 10px 0px;

	h1{
		margin: 5px 0;
		font-size: 18px;
	}

	p{
	   margin: 0;	
	}
`;

const List = ({
	data, header, body, id,
}) => (
	<ListComponent>
		{
			data && data.length !== 0
				? data.map(item => (
					<li key={item[id]}>
						<Item>
							<h1>{item[header]}</h1>
							<p>{item[body]}</p>
						</Item>
					</li>))
				: <li>Nenhum item encontrado.</li>
		}
	</ListComponent>
);

List.propTypes = {
	header: propTypes.string.isRequired,
	body: propTypes.string.isRequired,
	data: propTypes.instanceOf(Array).isRequired,
};

export default List;
