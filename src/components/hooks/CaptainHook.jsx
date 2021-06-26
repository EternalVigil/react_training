import { useState, useEffect } from 'react';
import { generateMatchHistory } from '../helpers/match-helpers'

export const CaptainHook = () => {
	const [currentCount, setCurrentCount] = useState(0);
	const [isOnline, setIsOnline] = useState(true);
	const [matchHistory, setMatchHistory] = useState(generateMatchHistory());
	const [showWinner, setShowWinner] = useState('');

	useEffect(() => {
		console.log('only fires once');
		console.log('empty dependancy', currentCount);
	}, []);

	useEffect(() => {
		console.log('fires on currentCount change');
		console.log('dependency', currentCount);
	}, [currentCount]);

	useEffect(() => {
		console.log('tracks PSN');
		console.log('dependency', isOnline);
	}, [isOnline]);

	useEffect(() => {
		console.log('go outside nerd');
		console.log('dependency', currentCount, isOnline);
	}, [currentCount, isOnline]);

	const incrementCounter = () => {
		setCurrentCount(currentCount + 1);
	};

	const decrementCounter = () => {
		setCurrentCount(currentCount - 1);
	};

	const clearCounter = () => {
		setCurrentCount(0);
		setIsOnline(!isOnline);
	};

	const clearTheSalt = () => {
		setIsOnline(true);
	};

	const handleWinnerFilter = (winner) => {
		setShowWinner(winner);
	};

	const clearMatchHistory = () => {
		setMatchHistory([]);
	};

	const incrementProps = {
		text: 'Grab Whiff',
		title: 'DAMN YOU LEO',
		onClick: incrementCounter,
	};

	return({
		currentCount,
		isOnline,
		showWinner,
		matchHistory,
		incrementCounter,
		decrementCounter,
		clearCounter,
		clearTheSalt,
		incrementProps,
		handleWinnerFilter,
		clearMatchHistory,
	});
};
