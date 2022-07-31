import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Player from './player';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import CourtPng from '../imgs/basketball-court.png';

const Court = (props) => {
	return (
		<Paper
			elevation='5'
			style={{
				backgroundImage: `url(${CourtPng})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				height: '500px',
			}}></Paper>
	);
};

export default Court;
