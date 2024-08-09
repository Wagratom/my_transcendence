import { MdModeEdit } from 'react-icons/md';
import { IoMdExit } from 'react-icons/io';

type propsSelectConfiuration = {
	openConfigurations: React.Dispatch<React.SetStateAction<boolean>>;
	closedMineProfile: React.Dispatch<React.SetStateAction<string>>;
	id: string;
}

export default function OptionsMiniProfile(props: propsSelectConfiuration): JSX.Element  {

	return (
		<div className='bg-light text-black p-3 rounded z-2 position-relative'>
			<div style={{cursor: 'pointer'}} onClick={() => props.openConfigurations(true)}>
				<p><MdModeEdit className='m-1'/>edit Profile</p>
			</div>
			<div style={{cursor: 'pointer'}} onClick={() => {}}>
				<p><IoMdExit className='m-1'/>Lougot</p>
			</div>
			<div style={{cursor: 'pointer'}} onClick={() => props.closedMineProfile('')}>
				<p><IoMdExit className='m-1'/>close</p>
			</div>
		</div>
	)
}
