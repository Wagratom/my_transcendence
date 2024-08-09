import React from 'react';
import MiniPerfilUser from './MineProfileUser/MiniPerfilUser';
import Options from './options';
import backgroundSideBar from '../../../assets/game/backgrounds/sideBar/bgPntTerra.jpg';

type propsMiniProfile = {
	handleInitialScreen: React.Dispatch<React.SetStateAction<string>>;
}

export default function MiniProfile(props: propsMiniProfile) {
	const cssMiniprfile: React.CSSProperties = {
		display: 'flex',
		flexDirection: 'column',

		backgroundImage: `url(${backgroundSideBar})`,
		backgroundSize: '100% 100%',
		backgroundPosition: 'left',

		height: '100% ',
		width: '30rem',
		padding: '1.5rem 1rem',
	}

	return (
		<>
			<div className='position-absolute top-0 end-0 h-100' style={cssMiniprfile}>
				<MiniPerfilUser handleInitialScreen={props.handleInitialScreen} />
				<hr className='m-0 w-100 text-white'></hr>
				<Options/>
				{/* <ListFriends players={players} getPlayers={getPlayers} /> */}
			</div>
		</>
	);
}

