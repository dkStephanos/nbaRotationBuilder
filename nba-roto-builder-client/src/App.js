import { useEffect, useState } from 'react';
import './App.css';
import { fetchTeamRoster } from './actions/team';
import Roster from './components/roster';
import Court from './components/court';
import MenuAppBar from './components/appbar';
import Table from './components/statsTable';
import GameSlider from './components/gameSlider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
	const [roster, setRoster] = useState([]);

	useEffect(() => {
		fetchTeamRoster('1610612756', setRoster);
	}, []);

	return (
		<div className='App'>
			<DndProvider backend={HTML5Backend}>
				<MenuAppBar />
				<Court />
				<Roster roster={roster} />
				<GameSlider />
				<Table />
			</DndProvider>
		</div>
	);
}

export default App;
