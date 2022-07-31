import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Player from './player';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const Roster = (props) => {
	return (
		<Paper
			elevation='5'
			style={{
				overflow: 'auto',
				height: '1000px',
				width: '15%',
				display: 'inline-block',
				float: 'right',
				zIndex: '1000',
			}}>
			<Typography variant='h5'>Team Roster</Typography>
			<List>
				{props.roster.map((player) => (
					<ListItem>
						<Player player={player} />
					</ListItem>
				))}
			</List>
		</Paper>
	);
};

export default Roster;
