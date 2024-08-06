import FolderSettingsGame from "./Folder";
import './configurations.css';
import ButtonsPainelIcons from './ButtonsPainelIcons';
import { useContext, useRef } from "react";
import { UserData } from "../../../../Contexts/Contexts";
import UploadPhoto from "./UploadPhoto";
import InputNickname from "./InputNickname";
import axios from "axios";


type propsConfigurationGame = {
	openConfigurations: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameConfiguration(props: propsConfigurationGame): JSX.Element {
	const { user, updateDataUser } = useContext(UserData);
	const formUpdate = useRef<HTMLFormElement>(null);

	const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);

		const headers = {
			'Content-Type': 'multipart/form-data'
		}

		axios.post('https://localhost/api/users/updateProfile', formData, {
			headers: headers
		}).then((response) => {
			updateDataUser()
		}).catch((error) => {
			console.log(error);
		});
	}
	return (
		<div className='configurationsGame'>
			<h2 className='text-center'>configurations</h2>
			<form onSubmit={sendForm} ref={formUpdate}>
				<div className="d-flex flex-column">
					<ButtonsPainelIcons openConfigurations={props.openConfigurations}/>
					<InputNickname />
				</div>
				<UploadPhoto photo={user.avatar} />
				<FolderSettingsGame />
			</form>
		</div>
	)
}
