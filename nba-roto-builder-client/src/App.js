import { useEffect, useState } from 'react';
import './App.css';
import { fetchTeamRoster } from './actions/team';
import Roster from './components/roster';
import Court from './components/court';
import MenuAppBar from './components/appbar';
import Table from './components/statsTable';

function App() {
	const [roster, setRoster] = useState([]);

	useEffect(() => {
		fetchTeamRoster('1610612756', setRoster);
	}, []);

	return (
		<div className='App'>
			<MenuAppBar />
			<Roster roster={roster} />
			<div>
				<Court />
				<Table />
			</div>
		</div>
	);
}

export default App;
