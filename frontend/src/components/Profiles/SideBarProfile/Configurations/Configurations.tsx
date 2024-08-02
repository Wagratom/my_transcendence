import FolderSettingsGame from "./Folder";
import './animationEditInputName.css';
import { IoIosClose } from "react-icons/io";
import backgroundConfiguration from '../../../../assets/game/backgrounds/configuration.jpg';
type propsConfigurationGame = {
	closed: React.Dispatch<React.SetStateAction<string>>;
}

export default function ConfigurationGame(props: propsConfigurationGame): JSX.Element {
	return (
		<div className='position-fixed top-50 start-50 translate-middle p-2 rounded'
			style={{
				backgroundColor: '#653b1e',
				width: '60rem',
				backgroundImage: `url(${backgroundConfiguration})`,
				height: '40rem',
				backgroundSize: '100% 100%',
				overflow: 'auto',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<IoIosClose
				size={30}
				onClick={() => props.closed('')}
				className='position-absolute top-0 end-0 m-2 cursor-pointer'
				type='button'
			/>
			<h2 className='text-center text-white'>Game Settings</h2>
			<div className='rounded p-5'>
				<form >
					sdadasda
				</form>
			</div>
			<FolderSettingsGame />
		</div>
	)
}
