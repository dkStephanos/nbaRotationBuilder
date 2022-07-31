import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Headshot from './headshot';
import { Tooltip } from '@mui/material';

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

const Position = (props) => {
	const [player, setPlayer] = useState(null);

	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: 'player',
		drop: (val) => setPlayer(val.player),
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
		<Tooltip title={player ? player[3] : 'Unassigned'}>
			<div
				ref={drop}
				style={{ ...style, ...props.position_styles[props.pos.abrv], backgroundColor }}
				data-testid='dustbin'>
				{isActive ? (
					'Release to drop'
				) : player == null ? (
					props.pos.abrv
				) : (
					<Headshot size='sm' player={player} />
				)}
			</div>
		</Tooltip>
	);
};

export default Position;
