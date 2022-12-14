import { useEffect, useState } from 'react';

const Headshot = (props) => {
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
			aria-label='headshot'
			style={{ height: props.size == 'sm' ? '40px' : '80px' }}
			data={`https://nba-players.herokuapp.com/players/${props.player[3].split(' ')[1]}/${
				props.player[3].split(' ')[0]
			}`}
			type='image/png'></object>
	);
	return error ? (
		<img style={{ height: props.size == 'sm' ? '40px' : '80px' }} alt='error' src='default.png' />
	) : (
		headshot
	);
};

export default Headshot;
