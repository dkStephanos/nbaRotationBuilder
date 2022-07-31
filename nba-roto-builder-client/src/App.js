import { useEffect, useState, useRef } from 'react';
import './App.css';
import { fetchTeamRoster } from './actions/team';
import Roster from './components/roster';
import Court from './components/court';
import MenuAppBar from './components/appbar';
import Table from './components/statsTable';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Background from './imgs/background.jpg';
import { makeRotationsDict } from './constants';

function useStateRef(initialValue) {
	const [value, setValue] = useState(initialValue);

	const ref = useRef(value);

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return [value, setValue, ref];
}

function App() {
	const [roster, setRoster] = useState([]);
	const [gameMin, setGameMin, ref] = useStateRef(0);
	const [rotations, setRotations] = useState(makeRotationsDict());

	useEffect(() => {
		fetchTeamRoster('1610612756', setRoster);
	}, []);

	return (
		<div className='App' style={{ backgroundImage: `url(${Background})`, height: '1000px' }}>
			<DndProvider backend={HTML5Backend}>
				<MenuAppBar />
				<Court
					gameMin={gameMin}
					rotation={rotations[gameMin]}
					handleSliderChange={(event) => setGameMin(event.target.value)}
					handlePositionSet={(pos, player) => {
						const newRotation = { ...rotations };
						newRotation[ref.current][pos] = player;
						setRotations(newRotation);
					}}
				/>
				<Roster roster={roster} />
				<Table />
			</DndProvider>
		</div>
	);
}

export default App;
