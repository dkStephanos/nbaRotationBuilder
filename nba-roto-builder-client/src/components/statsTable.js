import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchTeamLineups } from '../actions/team';

const StatsTable = (props) => {
	const [lineups, setLineups] = useState(null);

	useEffect(() => {
		fetchTeamLineups('1610612756', setLineups);
	}, []);

	return (
		<TableContainer
			component={Paper}
			style={{
				display: 'inline-block',
				verticalAlign: 'bottom',
				width: '57%',
				float: 'left',
				height: '400px',
			}}>
			<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						{lineups && lineups.headers.map((header) => <TableCell>{header}</TableCell>)}
					</TableRow>
				</TableHead>
				<TableBody>
					{lineups &&
						lineups.data.map((row) => (
							<TableRow
								key={row + '-tb-row'}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								{row && row.map((header) => <TableCell>{header}</TableCell>)}
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default StatsTable;
