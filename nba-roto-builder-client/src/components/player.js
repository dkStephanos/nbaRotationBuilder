import { useEffect, useState } from 'react';
import { Card } from '@mui/material';

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
			data={`https://nba-players.herokuapp.com/players/${props.player[3].split(' ')[1]}/${
				props.player[3].split(' ')[0]
			}`}
			type='image/png'
			alt='headshot'></object>
	);
	return (
		<Card>
			{console.log(headshot)}
			{error ? <img alt='error' src='error.jpg' /> : headshot}
		</Card>
	);
};

export default Player;
