export const fetchTeamRoster = (teamId, setRoster) => {
	fetch('http://localhost:8000/api/roster/').then((data) =>
		data.json().then((data) => {
			setRoster(data.data);
		})
	);
};

export const fetchTeamLineups = (teamId, setLineups) => {
	fetch('http://localhost:8000/api/lineups/').then((data) =>
		data.json().then((data) => {
			setLineups(JSON.parse(data.lineups));
		})
	);
};
