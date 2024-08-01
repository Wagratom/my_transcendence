import React from 'react';
import MiniPerfilUser from './MineProfileUser/MiniPerfilUser';

type propsMiniProfile = {
	showMiniPerfil: React.Dispatch<React.SetStateAction<string>>;
}

export default function MiniProfile(props: propsMiniProfile) {
	const cssMiniprfile: React.CSSProperties = {
		display: 'flex',
		flexDirection: 'column',

		backgroundImage: `url('https://s0.smartresize.com/wallpaper/400/885/HD-wallpaper-8-bit-moonlight-8bit-arcade-blue-cloud-moon-pixel.jpg')`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',

		height: '100% !important',
		width: '25vw',
	}

	return (
		<>
			<div className='position-absolute top-0 end-0 h-100' style={cssMiniprfile}>
				<MiniPerfilUser showMiniPerfil={props.showMiniPerfil} />
				<hr className='m-0 w-100 text-white'></hr>
				{/* <Options getPlayers={getPlayers} /> */}
				{/* <ListFriends players={players} getPlayers={getPlayers} /> */}
			</div>
		</>
	);
}

