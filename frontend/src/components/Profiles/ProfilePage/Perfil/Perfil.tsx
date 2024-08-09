import { UserData } from '../../../Contexts/Contexts';
import { useContext, useState } from 'react';
import { InfosUserPerfil } from '../../typesProfile';
import HandleRank from '../../RankMapings';
import ProfilePhoto from './Image';
import Pointer from './pontos';
import Rank from './rank';


export default function InformationsUser() {
	const [user, setInfosUser] = useState<InfosUserPerfil>({} as InfosUserPerfil);
	const dataUser = useContext(UserData);


	let pointers: number = user.wins - user.loses;
	const { rank, borderImg, borderWrite } = HandleRank(5);
	let aux = user.wins + user.draws;
	let kda: number = aux === 0 ? user.loses : aux / user.loses;
	return (
		<div className='text-center text-white bg- h-100'>
			<ProfilePhoto
				borderImg={borderImg}
				avatar={dataUser.user.avatar}
				nickname={dataUser.user.nickname}
			/>
			<div className='d-flex flex-column align-items-center'>
				<Rank rank={rank} />
				<Pointer
					wins={user.wins}
					loses={user.loses}
					draws={user.draws}
					kda={kda}
					borderWrite={borderWrite}
					pointers={pointers}
				/>
			</div>
		</div>
	);
}
