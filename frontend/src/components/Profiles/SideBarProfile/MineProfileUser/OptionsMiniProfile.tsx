import { MdModeEdit } from 'react-icons/md';
import { IoMdExit } from 'react-icons/io';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserData } from '../../../Contexts/Contexts';
import { IconType } from 'react-icons';

type propsSelectConfiuration = {
	showConfigurations: React.Dispatch<React.SetStateAction<boolean>>;
	showMiniPerfil: React.Dispatch<React.SetStateAction<string>>;
	id: string;
}

export default function OptionsMiniProfile(props: propsSelectConfiuration): JSX.Element  {
	const navitaion = useNavigate();
	const userData = useContext(UserData).user;

	const disconnect = () => {
		let aux = {
			user_id: props.id,
			is_active: false,
			msg: "entrei/sai"
		}
		userData.socket?.emit('check-status', aux);
		Cookies.remove('jwtToken');
		navitaion('/');
	}

	const optionBlock = (optionName: string, Icon: IconType) => {
		return (
			<div style={{cursor: 'pointer'}}>
				<p><Icon className='m-1'/>{optionName}</p>
			</div>
		)
	}
	return (
		<div className='bg-light text-black p-3 rounded z-2 position-relative'>
			<div style={{cursor: 'pointer'}} onClick={() => props.showMiniPerfil('settings')}>
				<p><MdModeEdit className='m-1'/>edit Profile</p>
			</div>
			<div style={{cursor: 'pointer'}} onClick={() => props.showConfigurations(true)}>
				<p><IoMdExit className='m-1'/>Lougot</p>
			</div>
		</div>
	)
}
