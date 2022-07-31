import { Card } from '@mui/material';
import { useDrag } from 'react-dnd';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Headshot from './headshot';

const Player = (props) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'player',
		item: { player: props.player },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));
	const opacity = isDragging ? 0.4 : 1;

	return (
		<Card ref={drag} style={{ opacity, height: '200px', width: '200px' }}>
			<CardContent>
				<Typography variant='h7' component='div'>
					{props.player[3]}
				</Typography>
			</CardContent>
			<CardMedia>
				<Headshot player={props.player} />
			</CardMedia>
			<CardActions>
				<Button size='small'>View Stats</Button>
			</CardActions>
		</Card>
	);
};

export default Player;
