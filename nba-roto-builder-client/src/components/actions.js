import { Button, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Actions = (props) => {
	return (
		<Card style={{ height: '250px', width: '300px', margin: '5px' }}>
			<CardContent>
				<Typography variant='h6' component='div'>
					Actions
				</Typography>
				<Button style={{ marginBottom: '4px' }} size='small' variant='contained'>
					Auto-fill Starters
				</Button>
				<Button style={{ marginBottom: '4px' }} size='small' variant='contained'>
					Toggle Oponent
				</Button>
				<Button style={{ marginBottom: '4px' }} size='small' variant='contained'>
					Check Minute Restrictions
				</Button>
				<Button style={{ marginBottom: '4px' }} size='small' variant='contained'>
					Check Minute Restrictions
				</Button>
				<Button style={{ marginBottom: '4px' }} size='small' variant='contained'>
					Import Linup
				</Button>
				<Button style={{ marginBottom: '4px' }} size='small' variant='contained'>
					Export Linup
				</Button>
			</CardContent>
		</Card>
	);
};

export default Actions;
