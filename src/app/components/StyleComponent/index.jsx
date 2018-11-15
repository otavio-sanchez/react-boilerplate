import React from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';
import theme from '../../theme';

const StyleDiv = styled.div`
    color: ${props => props.style.font.color};
    font-family: ${props => props.style.font.family};
	font-size: ${props => props.style.font.size};
`;

const StyleComponent = ({ children }) => (
	<ThemeProvider theme={theme}>
		<StyleDiv style={theme.body}>
			{children}
		</StyleDiv>
	</ThemeProvider>
);


export default withTheme(StyleComponent);
