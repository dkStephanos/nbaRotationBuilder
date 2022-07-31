import { useEffect, useState } from 'react';
import './App.css';
import { fetchTeamRoster } from './actions/team';
import Player from './components/player';
import MenuAppBar from './components/appbar';

function App() {
	const [roster, setRoster] = useState([]);

	useEffect(() => {
		fetchTeamRoster('1610612756', setRoster);
	}, []);

	return (
		<div className='App'>
			<MenuAppBar />
			{roster.map((player) => (
				<Player player={player}></Player>
			))}
		</div>
	);
}

export default App;
