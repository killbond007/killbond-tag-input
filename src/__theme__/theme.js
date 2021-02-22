const theme = {
	breakpoints: ['768px', '1024px', '1240px'],
	devices: {
		sm: '@media (max-width: 576px)',
		md: '@media (max-width: 768px)',
		lg: '@media (max-width: 1024px)',
		xl: '@media (max-width: 1240px)',
	},
	colors: {
		purple_1: '#3827b0',
		purple_2: '#834cc4',
		pale_purple1: '#f9f9ff',
		red: '#ff7068',
		green: '#0cdcae',
		dark_indigo: '#180e5e',
		grey_shades: '#9f9bac',
		light_grey: '#c5d0de',
		dark: '#352c4b',
		white: '#ffffff',
	},
	opacities: {
		opacity_1: 0.85,
		opacity_2: 0.7,
		opacity_3: 0.55,
		opacity_4: 0.4,
		opacity_5: 0.25,
		opacity_6: 0.1,
	},
	fonts: {
		primary: 'Ubuntu',
		icons: 'Otto',
	},
	typography: {
		h1: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 24,
			fontWeight: 500,
			fontStyle: 'normal',
			lineHeight: 1.25,
			color: '#3827b0',
			'@media (max-width: 768px)': {
				fontSize: 22,
				lineHeight: 1.32,
			},
		},
		h2: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 18,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.39,
			color: '#180e5e',
			'@media (max-width: 768px)': {
				fontSize: 17,
				lineHeight: 1.35,
			},
		},
		h3: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 16,
			fontWeight: 500,
			fontStyle: 'normal',
			lineHeight: 1.25,
			color: '#180e5e',
			'@media (max-width: 768px)': {
				fontSize: 15,
				lineHeight: 1.47,
			},
		},
		h4: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 15,
			fontWeight: 500,
			fontStyle: 'normal',
			lineHeight: 1.33,
			color: '#180e5e',
			'@media (max-width: 768px)': {
				fontSize: 14,
				lineHeight: 1.33,
			},
		},
		body: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 14,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.43,
			color: '#352c4b',
			'@media (max-width: 768px)': {
				fontSize: 13,
				lineHeight: 1.54,
			},
		},
		body_bold: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 14,
			fontWeight: 700,
			fontStyle: 'normal',
			lineHeight: 1.43,
			color: '#352c4b',
			'@media (max-width: 768px)': {
				fontSize: 13,
				lineHeight: 1.54,
			},
		},
		label: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 12,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.33,
			color: '#3827b0',
			'@media (max-width: 768px)': {
				fontSize: 11,
				lineHeight: 1.27,
			},
		},
		label_form: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 12,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.33,
			color: '#9f9bac',
			'@media (max-width: 768px)': {
				fontSize: 11,
				lineHeight: 1.27,
			},
		},
		label_link: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 12,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.33,
			color: '#9f9bac',
			'@media (max-width: 768px)': {
				fontSize: 11,
				lineHeight: 1.27,
			},
		},
		th: {
			fontFamily: 'Ubuntu, sans-serif',
			textTransform: 'uppercase',
			fontSize: 9,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.33,
			color: '#9f9bac',
		},
		figure: {
			fontFamily: 'Ubuntu, sans-serif',
			fontSize: 40,
			fontWeight: 500,
			fontStyle: 'normal',
			lineHeight: 1.13,
			color: '#352c4b',
			'@media (max-width: 768px)': {
				fontSize: 30,
			},
		},
		icon_small: {
			'&&&': {
				fontFamily: 'Otto',
			},
			fontSize: 15,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1,
			'-webkit-font-smoothing': 'antialiased',
			'-moz-osx-font-smoothing': 'grayscale',
			color: '#ffffff',
		},
		icon_large: {
			'&&&': {
				fontFamily: 'Otto',
			},
			fontSize: 24,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1,
			'-webkit-font-smoothing': 'antialiased',
			'-moz-osx-font-smoothing': 'grayscale',
			color: '#ffffff',
		},
		icon_logo: {
			'&&&': {
				fontFamily: 'Otto',
			},
			fontSize: 35,
			fontWeight: 'normal',
			fontStyle: 'normal',
			lineHeight: 1,
			'-webkit-font-smoothing': 'antialiased',
			'-moz-osx-font-smoothing': 'grayscale',
			color: '#ffffff',
		},
	},
	shadows: {
		small: {
			boxShadow: '1px 1px 0 0 rgba(197, 208, 222, 0.4)',
		},
		medium: {
			boxShadow: '0 2px 1px 0 rgba(197, 208, 222, 0.7)',
		},
		large: {
			boxShadow: '0 0 2px 0 rgba(197, 208, 222, 0.7)',
		},
		table: {
			boxShadow: '4px 4px 4px 0 rgba(197, 208, 222, 0.4)',
		},
		focused: {
			boxShadow: '0 0 2px 0 #834cc4',
		},
	},
	borders: {
		light: {
			borderRadius: 3,
			border: '1px rgba(249, 249, 255, 1) solid',
		},
		regular: {
			borderRadius: 3,
			border: '1px rgba(197, 208, 222, 0.4) solid',
		},
		bold: {
			borderRadius: 3,
			border: '1px #c5d0de solid',
		},
		focused: {
			borderRadius: 3,
			border: '1px #834cc4 solid',
		},
		selected: {
			border: '4px #0cdcae solid',
		},
		error: {
			borderRadius: 3,
			border: '1px #ff7068 solid',
		},
	},
	lines: {
		separator: {},
	},
}

export default theme
