import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { RootState } from '../redux/store';
import { GlobalStyles } from './Theme.styled';

export const colors = {
	pink: '#f523a3',
	melon: '#f55d4b',
	success: '#58D68D',
	warning: '#F4D03F',
	danger: '#EC7063',
	white: '#FFFFFF',
	black: '#000000'
};

export const lightTheme = {
	text: '#425C6C',
	textLight: '#86A2B5',
	title: colors.melon,
	primary: '#F2F5F7',
	secondary: '#ffffff',
	asset: '#5465ff',
	gradient1: `linear-gradient(to left top, ${colors.melon}, ${colors.melon})`,
	bgBottomMenu: `linear-gradient(to left top, ${colors.melon}, ${colors.melon})`,
	blueToPink: '#5465ff',
	pinkToBlue: 'linear-gradient(to right, rgba(169, 53, 236, 1), rgb(0, 102, 255))',
	fontSize: {
		xs: '1.2rem',
		sm: '1.5rem',
		md: '2rem',
		lg: '2.5rem',
		xlg: '3rem',
		xxlg: '3.5rem'
	},
	borderRadius: {
		xs: '0.8rem',
		sm: '1.5rem',
		md: '2rem',
		lg: '11px',
		xlg: '14px',
		xxlg: '50rem'
	},
	boxShadow: {
		sm: '0 0 1rem 1rem #000000'
	},
	shadowNeon: {
		start: 'transparent',
		end: 'transparent'
	},
	colors
};

export const darkTheme = {
	...lightTheme,
	text: '#ffffff',
	textLight: '#7E80C3',
	primary: '#161730',
	secondary: '#212244',
	asset: '#7E80C3',
	bgBottomMenu: `linear-gradient(to left top, ${colors.pink}, ${colors.melon})`,
	blueToPink: 'linear-gradient(to left, #a935ec, #0066ff)',
	gradient1: `linear-gradient(to right, ${colors.pink}, ${colors.melon})`,
	shadowNeon: {
		start: '#0066ff',
		end: '#a935ec'
	}
};

export const addOpacity = (color: string, opacity: number): string => {
	const opacityHex = Math.round(opacity * 255).toString(16);
	return `${color}${opacityHex}`;
};

export type ITheme = typeof lightTheme;

const Theme: React.FC = ({ children }) => {
	const { darkMode } = useSelector(({ app }: RootState) => app);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				{children}
			</>
		</ThemeProvider>
	);
};

export default Theme;
