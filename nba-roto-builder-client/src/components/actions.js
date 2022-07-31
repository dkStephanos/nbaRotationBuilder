import { Button, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Actions = (props) => {
	return (
		<Card style={{ height: '200px', width: '300px', margin: '5px' }}>
			<CardContent>
				<Typography variant='h6' component='div'>
					Actions
				</Typography>
				<Button style={{ marginBottom: '4px' }} variant='contained'>
					Auto-fill Starters
				</Button>
				<Button style={{ marginBottom: '4px' }} variant='contained'>
					Toggle Oponent
				</Button>
				<Button style={{ marginBottom: '4px' }} variant='contained'>
					Check Minute Restrictions
				</Button>
			</CardContent>
		</Card>
	);
};

export default Actions;
