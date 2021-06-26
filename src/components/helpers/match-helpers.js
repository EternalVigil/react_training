export const generateMatchHistory = () => {
	return([
			{
				id: '1',
				player1: 'Me',
				player2: 'You',
				winner: 'Me',
				matchTime: '40 secs',
				rounds: 3,
			},
			{
				id: '2',
				player1: 'Me',
				player2: 'You',
				winner: 'You',
				matchTime: '30 secs',
				rounds: 2,
			},
			{
				id: '3',
				player1: 'Me',
				player2: 'You',
				winner: 'You',
				matchTime: '60 secs',
				rounds: 5,
			},
		]
	);
};