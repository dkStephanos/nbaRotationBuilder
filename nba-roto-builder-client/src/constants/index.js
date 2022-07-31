export const API_URL = 'http://localhost:8000/api/';

export const TEAM = '1610612756';

export const makeRotationsDict = () => {
	const rotations = {};

	for (let i = 0; i < 49; i++) {
		rotations[i] = {
			PG: null,
			SG: null,
			SF: null,
			PF: null,
			C: null,
		};
	}

	return rotations;
};
