import { UserData } from '../../Contexts/Contexts';
import React, { useContext, useState } from 'react';
import './sideBarProfile.css';
import StatusPlayer from './statusPlayer';
import { CiSettings } from 'react-icons/ci';
import OptionsMiniProfile from './OptionsMiniProfile';

type propsMiniProfile = {
	showMiniPerfil: React.Dispatch<React.SetStateAction<string>>;
}

export default function MiniPerfilUser(props: propsMiniProfile) {
	const userData = useContext(UserData).user;
	const [optionsConf, setOptionsConf] = useState<boolean>(true);
	const [showConfigurations, setShowConfigurations] = useState<boolean>(false);

	if (userData.nickname === '' || userData.avatar === '') {
		return (
			<div className='d-flex p-3' style={{ height: '15vh' }}>
				<div className="spinner-border text-primary m-auto h-75" role="status">
					<span className="visually-hidden m-auto">Loading...</span>
				</div>
			</div>
		);
	}


	return (
		<div className='miniProfileUser'>
			<div className='informationUser'>
				<div>
					<img className='img-thumbnail' src={userData.avatar} alt="Dinamic User" />
				</div>
				<StatusPlayer status={userData.status} nickName={userData.nickname} />
			</div>
			<div className='ms-auto'>
				<CiSettings
					className='d-flex ms-auto'
					type='button'
					size={20}
					color='white'
					onClick={() => setOptionsConf(!optionsConf)}
				/>
				{optionsConf
					?
					<OptionsMiniProfile
						showMiniPerfil={props.showMiniPerfil}
						id={userData.id}
						setShowConfigurations={setShowConfigurations}
					/>
					:
					null
				}
			</div>
		</div>
	)
}
