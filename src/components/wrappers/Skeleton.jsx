import React from 'react';
import { Button as GenericButton } from '../core/button';
import { Counter as ThingCounter } from '../core/counter';
import { CaptainHook } from '../hooks/CaptainHook';

export const Skeleton = () => {
	const {
		currentCount,
		isOnline,
		matchHistory,
		showWinner,
		incrementProps,
		decrementCounter,
		clearTheSalt,
		clearCounter,
		handleWinnerFilter,
		clearMatchHistory,
	} = CaptainHook();

	const renderedMatches = 
		showWinner
		? matchHistory.filter(match => match.winner === showWinner) 
		: matchHistory;

	return(
		<>
			{
				isOnline 
				?
				<>
					<GenericButton {...incrementProps} />
					<GenericButton text={'Backdash'} title='double back' onClick={decrementCounter} />
				</>
				: 
				<>
					<GenericButton text='Go Online' title='Back to the Salt Mines' onClick={clearTheSalt} />
				</>
			}
			<GenericButton text={'Rage Quit'} title='disconnect' onClick={clearCounter} />
			<GenericButton text='Only My Wins' title='ME ME ME' onClick={() => handleWinnerFilter('Me')} />
			<GenericButton text='Not A Sore Loser' title='YOUR SOUL...IS MINE' onClick={() => handleWinnerFilter('You')} />
			<GenericButton text='NO WINNERS' title='COMMUNISM' onClick={() => handleWinnerFilter('')} />
			<GenericButton text='Thanos Snap' title='Go for the head' onClick={clearMatchHistory} />
			<ThingCounter count={currentCount} />
			{
				(currentCount > 4)
				? <p>Stunned</p>
				: <p>Not Stunned</p>
			}
			{ showWinner }
			{
				renderedMatches &&
				renderedMatches.map(match => {
					return(
						<div>
							{ Object.values(match).map(data => <span>{data}</span>) }
						</div>
					);
				})
			}
		</>
	);
};