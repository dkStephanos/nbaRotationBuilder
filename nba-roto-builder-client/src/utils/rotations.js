export const getPercentAssigned = (rotations) => {
	let total = 0;
	Object.keys(rotations).map((gameMin) =>
		Object.keys(rotations[gameMin]).map((pos) => {
			if (rotations[gameMin][pos] != null) total += 1;
		})
	);

	return (total / (48 * 5)).toFixed(2);
};

export const getPercentAssignedByPosition = (rotations, position) => {
	let total = 0;
	Object.keys(rotations).map((gameMin) =>
		Object.keys(rotations[gameMin]).map((pos) => {
			if (pos === position && rotations[gameMin][pos] != null) total += 1;
		})
	);

	return (total / 48).toFixed(2);
};
