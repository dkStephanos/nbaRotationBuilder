import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getPercentAssigned, getPercentAssignedByPosition } from '../utils/rotations';

const POSITIONS = ['PG', 'SG', 'SF', 'PF', 'C'];

const Totals = (props) => {
	return (
		<Card style={{ height: '200px', width: '300px' }}>
			<CardContent>
				<Typography variant='h6' component='div'>
					Percent Assigned
				</Typography>
				<Typography variant='subtitle2' component='div'>
					{`Overall: ${getPercentAssigned(props.rotations)}%`}
				</Typography>
				<Typography variant='subtitle2' component='div'>
					{`Synergy Rating: ${Math.floor(Math.random() * 100) + 1}%`}
				</Typography>
				{POSITIONS.map((pos) => (
					<Typography variant='subtitle2' component='div'>
						{`${pos}: ${getPercentAssignedByPosition(props.rotations, pos)}%`}
					</Typography>
				))}
			</CardContent>
		</Card>
	);
};

export default Totals;
