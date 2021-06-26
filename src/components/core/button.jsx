import React from 'react';

export const Button = ({ text, title, onClick, }) => {

	return(
		<button title={title} onClick={onClick}>
			{ text }
		</button>
	);
};
