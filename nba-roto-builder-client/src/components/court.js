import { useDrop } from 'react-dnd';
import { Paper } from '@mui/material';
import CourtPng from '../imgs/basketball-court.png';
const style = {
	height: '6rem',
	width: '6rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
	borderRadius: '50%',
	position: 'absolute',
};

const position_styles = {
	center: { top: '50%', left: '50%' },
};

const Court = (props) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: 'player',
		drop: () => ({ name: 'Dustbin' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	let backgroundColor = '#222';
	if (isActive) {
		backgroundColor = 'darkgreen';
	} else if (canDrop) {
		backgroundColor = 'darkkhaki';
	}

	return (
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
				{isActive ? 'Release to drop' : 'Drag a Player here'}
			</div>
		</Paper>
	);
};

export default Court;
