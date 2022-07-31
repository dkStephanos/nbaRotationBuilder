import { useDrop } from 'react-dnd';
import { Paper } from '@mui/material';
import CourtPng from '../imgs/basketball-court.png';
const style = {
	height: '4rem',
	width: '4rem',
	color: 'white',
	padding: '.3rem',
	textAlign: 'center',
	fontSize: '2.4rem',
	lineHeight: 'normal',
	float: 'left',
	borderRadius: '50%',
	position: 'absolute',
	zIndex: '100',
};

const position_styles = {
	center: { top: '40%', left: '65%' },
};

const Court = (props) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: 'player',
		drop: (player) => console.log(player),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	let backgroundColor = '#222';
	if (isActive) {
		backgroundColor = 'darkpurple';
	} else if (canDrop) {
		backgroundColor = 'purple';
	}

	return (
		<div style={{ display: 'inline-block', verticalAlign: 'bottom', width: '57%', float: 'left' }}>
			<Paper
				elevation='5'
				style={{
					backgroundImage: `url(${CourtPng})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					height: '500px',
					position: 'relative',
				}}>
				<div
					ref={drop}
					style={{ ...style, ...position_styles['center'], backgroundColor }}
					data-testid='dustbin'>
					{isActive ? 'Release to drop' : 'C'}
				</div>
			</Paper>
		</div>
	);
};

export default Court;
