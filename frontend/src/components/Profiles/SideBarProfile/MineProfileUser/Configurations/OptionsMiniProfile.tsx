import { MdModeEdit } from 'react-icons/md';
import { IoMdExit } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { useState } from 'react';
import GameConfiguration from './Configurations';

type propsSelectConfiuration = {
	closedMineProfile: React.Dispatch<React.SetStateAction<string>>;
}

export default function OptionsMiniProfile(props: propsSelectConfiuration): JSX.Element {
	const [openScreenToUpdateProfile, setOpenScreenToUpdateProfile] = useState<boolean>(false)
	const [optionsConf, setOptionsConf] = useState<boolean>(false);

	const getOptionsConf = () => {
		return (
			<div className='bg-light text-black p-3 rounded z-2 position-relative'>
				<div style={{ cursor: 'pointer' }} onClick={() => setOpenScreenToUpdateProfile(!openScreenToUpdateProfile)}>
					<p><MdModeEdit className='m-1' />edit Profile</p>
				</div>
				<div style={{ cursor: 'pointer' }} onClick={() => { }}>
					<p><IoMdExit className='m-1' />Lougot</p>
				</div>
				<div style={{ cursor: 'pointer' }} onClick={() => props.closedMineProfile('')}>
					<p><IoMdExit className='m-1' />close</p>
				</div>
			</div>
		)
	}

	return (
		<div className="ms-auto" id="settingsUser">
			<CiSettings
				className="d-flex ms-auto"
				type="button"
				size={20}
				color="white"
				onClick={() => setOptionsConf(!optionsConf)}
			/>
			{optionsConf && getOptionsConf()}
			{openScreenToUpdateProfile && <GameConfiguration openConfigurations={setOpenScreenToUpdateProfile} />}
		</div>
	)
}
