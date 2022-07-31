import { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Player = (props) => {
	const [error, setError] = useState(false);
	useEffect(() => {
		fetch(
			`https://nba-players.herokuapp.com/players/${props.player[3].split(' ')[1]}/${
				props.player[3].split(' ')[0]
			}`
		).then((data) => {
			data.blob().then((data) => (data.type == 'image/png' ? setError(false) : setError(true)));
		});
	}, []);

	const headshot = (
		<object
			style={{ height: '80px' }}
			data={`https://nba-players.herokuapp.com/players/${props.player[3].split(' ')[1]}/${
				props.player[3].split(' ')[0]
			}`}
			type='image/png'
			alt='headshot'></object>
	);
	return (
		<Card style={{ height: '200px', width: '200px' }}>
			<CardContent>
				<Typography variant='h7' component='div'>
					{props.player[3]}
				</Typography>
			</CardContent>
			<CardMedia>
				{error ? <img style={{ height: '80px' }} alt='error' src='error.jpg' /> : headshot}
			</CardMedia>
			<CardActions>
				<Button size='small'>View Stats</Button>
			</CardActions>
		</Card>
	);
};

export default Player;
