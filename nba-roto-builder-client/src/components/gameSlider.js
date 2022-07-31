import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
	{
		value: 0,
		label: 'Q1',
	},
	{
		value: 12,
		label: 'Q2',
	},
	{
		value: 24,
		label: 'Q3',
	},
	{
		value: 36,
		label: 'Q4',
	},
	{
		value: 48,
		label: 'Fin',
	},
];

const GameSlider = (props) => {
	return (
		<Box sx={{ paddingLeft: '40px', width: 650, position: 'absolute', top: '88%' }}>
			<Slider
				onChange={props.handleSliderChange}
				step={props.gameMin}
				defaultValue={0}
				step={1}
				max={48}
				valueLabelDisplay='auto'
				marks={marks}
			/>
		</Box>
	);
};

export default GameSlider;
