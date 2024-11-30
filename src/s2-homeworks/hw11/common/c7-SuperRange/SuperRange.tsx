import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
	return (
		//#8b8b8b
		<Slider
			value={props.value}
			sx={{ // стили для слайдера // пишет студент
				color: '#00CC22',
				height: 8,
				'& .MuiSlider-track': {
					border: 'none',
					// color: '#8b8b8b',
					// background: '#8b8b8b',

					'&::before': {
						background: '#8b8b8b'
					},
					'&::after': {
						background: '#8b8b8b'
					}
				},
				'& .MuiSlider-thumb': {
					height: 24,
					width: 24,
					backgroundColor: '#fff',
					border: '2px solid currentColor',
					'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
						// boxShadow: 'inherit',
						boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
					},
					'&::before': {
						display: 'none',

					},
					'&::after': {
						width: 10,
						height: 10,
						backgroundColor: '#00CC22',
						cursor: 'pointer',
						borderRadius: '50%',
					},
					'& .airbnb-bar': {
						height: 9,
						width: 9,
						backgroundColor: 'currentColor',
						marginLeft: 1,
						marginRight: 1,
					},
				},
				'& .MuiSlider-valueLabel': {
					lineHeight: 1.2,
					fontSize: 12,
					background: 'unset',
					padding: 0,
					width: 32,
					height: 32,
					borderRadius: '50% 50% 50% 0',
					backgroundColor: '#00CC22',
					transformOrigin: 'bottom left',
					transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
					'&::before': {
						display: 'none'
					},
					'&.MuiSlider-valueLabelOpen': {
						transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
					},
					'& > *': {
						transform: 'rotate(45deg)'
					},
				},
			}}
			////// IOS
			// color: '#00CC22',
			// height: 5,
			// padding: '15px 0',
			// '& .MuiSlider-thumb': {
			// 	height: 20,
			// 	width: 20,
			// 	backgroundColor: '#fff',
			// 	boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
			// 	'&:focus, &:hover, &.Mui-active': {
			// 		boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
			// 		// Reset on touch devices, it doesn't add specificity
			// 		'@media (hover: none)': {
			// 			boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
			// 		},
			// 	},
			// 	'&:before': {
			// 		boxShadow:
			// 			'0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
			// 	},
			// },
			// '& .MuiSlider-valueLabel': {
			// 			lineHeight: 1.2,
			// 			fontSize: 12,
			// 			background: 'unset',
			// 			padding: 0,
			// 			width: 32,
			// 			height: 32,
			// 			borderRadius: '50% 50% 50% 0',
			// 			backgroundColor: '#00CC22',
			// 			transformOrigin: 'bottom left',
			// 			transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
			// 			'&::before': {display: 'none'},
			// 			'&.MuiSlider-valueLabelOpen': {
			// 				transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
			// 			},
			// 			'& > *': {
			// 				transform: 'rotate(45deg)',
			// 			},
			// 		},
			//}}
			{...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
		/>
	)
}

export default SuperRange
// const PrettoSlider = styled(Slider)({
// 	color: '#52af77',
// 	height: 8,
// 	'& .MuiSlider-track': {
// 		border: 'none',
// 	},
// 	'& .MuiSlider-thumb': {
// 		height: 24,
// 		width: 24,
// 		backgroundColor: '#fff',
// 		border: '2px solid currentColor',
// 		'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
// 			boxShadow: 'inherit',
// 		},
// 		'&::before': {
// 			display: 'none',
// 		},
// 	},
// 	'& .MuiSlider-valueLabel': {
// 		lineHeight: 1.2,
// 		fontSize: 12,
// 		background: 'unset',
// 		padding: 0,
// 		width: 32,
// 		height: 32,
// 		borderRadius: '50% 50% 50% 0',
// 		backgroundColor: '#52af77',
// 		transformOrigin: 'bottom left',
// 		transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
// 		'&::before': { display: 'none' },
// 		'&.MuiSlider-valueLabelOpen': {
// 			transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
// 		},
// 		'& > *': {
// 			transform: 'rotate(45deg)',
// 		},
// 	},
// });