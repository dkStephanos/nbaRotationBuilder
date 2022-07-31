import { useEffect, useState } from 'react';
import './App.css';
import { fetchTeamRoster } from './actions/team';
import Roster from './components/roster';
import Court from './components/court';
import MenuAppBar from './components/appbar';
import Table from './components/statsTable';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Background from './imgs/background.jpg';

function App() {
	const [roster, setRoster] = useState([]);

	useEffect(() => {
		fetchTeamRoster('1610612756', setRoster);
	}, []);

	return (
		<div className='App' style={{ backgroundImage: `url(${Background})`, height: '1000px' }}>
			<DndProvider backend={HTML5Backend}>
				<MenuAppBar />
				<Court />
				<Roster roster={roster} />
				<Table />
			</DndProvider>
		</div>
	);
}

export default App;
