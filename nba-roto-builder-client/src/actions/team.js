export const fetchTeamRoster = (teamId, setRoster) => {
	fetch('http://localhost:8000/api/roster/').then((data) =>
		data.json().then((data) => {
			setRoster(data.data);
		})
	);
};
