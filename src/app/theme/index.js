

const colors = {
	main: '#00ADB5',
	alternative: '#FC3C3C',
	text: '#393E46',
	header: '#FFF4E0',
};


const header = {
	font: {
		size: '22px',
		color: colors.main,
		family: 'Arial',
	},
	background: {
		color: colors.header,
		height: '60px',
	},

};

const menu = {
	font: {
		size: '16px',
		color: colors.alternative,
		family: 'Arial',
	},
	background: {
		color: colors.header,
	},
};

const body = {
	font: {
		size: '16px',
		color: colors.text,
		family: 'Arial',
	},
};

const footer = {
	font: {
		size: '12px',
		color: colors.text,
		family: 'Arial',
	},
};

export default {
	header, colors, body, menu, footer,
};
