import { Paper } from '@mui/material';
import Position from './position';
import CourtPng from '../imgs/basketball-court.png';
import GameSlider from './gameSlider';

const positions = [
	{ name: 'Point Guard', abrv: 'PG' },
	{ name: 'Shooting Guard', abrv: 'SG' },
	{ name: 'Small Forward', abrv: 'SF' },
	{ name: 'Power Forward', abrv: 'PF' },
	{ name: 'Center', abrv: 'C' },
];

const position_styles = {
	PG: { top: '1%', left: '45%' },
	SG: { top: '15%', left: '5%' },
	SF: { top: '65%', left: '90%' },
	PF: { top: '55%', left: '25%' },
	C: { top: '40%', left: '65%' },
};

const Court = (props) => {
	return (
		<div style={{ display: 'inline-block', verticalAlign: 'bottom', width: '57%', float: 'left' }}>
			<Paper
				elevation='5'
				style={{
					backgroundImage: `url(${CourtPng})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					height: '480px',
					position: 'relative',
				}}>
				{positions.map((pos) => (
					<Position
						pos={pos}
						player={props.rotation[pos.abrv]}
						setPlayer={(pos, player) => props.handlePositionSet(pos, player, props.gameMin)}
						position_styles={position_styles}
					/>
				))}
				<GameSlider gameMin={props.gameMin} handleSliderChange={props.handleSliderChange} />
			</Paper>
		</div>
	);
};

export default Court;
