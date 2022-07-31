import { useEffect, useState } from 'react';
import './App.css';
import { fetchTeamRoster } from './actions/team';
import Roster from './components/roster';
import MenuAppBar from './components/appbar';

function App() {
	const [roster, setRoster] = useState([]);

	useEffect(() => {
		fetchTeamRoster('1610612756', setRoster);
	}, []);

	return (
		<div className='App'>
			<MenuAppBar />
			<Roster roster={roster} />
		</div>
	);
}

export default App;
