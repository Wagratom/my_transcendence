import FolderSettingsGame from "./Folder";
import './configurations.css';
import ButtonsPainelIcons from './ButtonsPainelIcons';
import { useContext } from "react";
import { UserData } from "../../../Contexts/Contexts";
import UploadPhoto from "./UploadPhoto";
import InputNickname from "./InputNickname";
type propsConfigurationGame = {
	closed: React.Dispatch<React.SetStateAction<string>>;
}

export default function GameConfiguration(props: propsConfigurationGame): JSX.Element {
	const { user } = useContext(UserData);

	return (
		<div className='configurationsGame'>
			<h2 className='text-center'>configurations</h2>
			<form>
				<div className="d-flex flex-column">
					<ButtonsPainelIcons />
					<InputNickname />
				</div>
				<UploadPhoto photo={user.avatar} />
			</form>
			<FolderSettingsGame />
		</div>
	)
}
