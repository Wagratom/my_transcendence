import MiniPerfilUser from './MineProfileUser/MiniProfileUser';
import backgroundSideBar from '../../../assets/game/backgrounds/sideBar/bgPntTerra.jpg';
import { UserData } from '../../Contexts/Contexts';
import { useContext, useState } from 'react';
import ListFriends from './PlayersList/ListFriends';
import Footer from './Footer/Footer';
import Options from './SideBarOptions/Options';

type propsMiniProfile = {
	handleInitialScreen: React.Dispatch<React.SetStateAction<string>>;
}

export default function MiniProfile(props: propsMiniProfile) {
	let { user } = useContext(UserData);
	const [urlToGetPlayers, setUrlToGetPlayers] = useState<string>(`/api/users/friends/${user.username}`);

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

	const wrapper: React.CSSProperties = {
		width: '100%',
		height: '100%',
		position: 'relative',
	}

	return (
		<div className='position-absolute top-0 end-0 h-100' style={cssMiniprfile}>
			<div style={wrapper}>
				<MiniPerfilUser handleInitialScreen={props.handleInitialScreen} />
				<hr className='m-0 w-100 text-white'></hr>
				<Options setUrlListSideBar={setUrlToGetPlayers} />
				<ListFriends url={urlToGetPlayers} />
				<Footer />
			</div>
		</div>
	);
}

