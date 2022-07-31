import { useDrop } from 'react-dnd';

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
		<div
			ref={drop}
			style={{ ...style, ...props.position_styles[props.pos.abrv], backgroundColor }}
			data-testid='dustbin'>
			{isActive ? 'Release to drop' : props.pos.abrv}
		</div>
	);
};

export default Position;
