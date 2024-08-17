import { useContext, useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserFriends } from 'react-icons/fa';
import { MdPersonRemoveAlt1, MdPersonAddAlt1 } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import AddFriend from "./ButtonsOptions/AddFriend";
import DeleteFriend from "./ButtonsOptions/DeleteFriend";
import BlockFriend from "./ButtonsOptions/BlockFriend";
import { UserData } from "../../../Contexts/Contexts";

export default function Options({ setUrlListSideBar }: { setUrlListSideBar: React.Dispatch<React.SetStateAction<string>> }) {
	//Function that shows and handle with social options in the sidebar
	const [openCurrentOption, setOpenCurrentOption] = useState('');
	const { user } = useContext(UserData);

	const handlePlayersListOptions = (option: string) => {
		if (option === 'allUsers') {
			setUrlListSideBar(`/api/users/all`);
		}
		if (option === 'friendsUsers') {
			setUrlListSideBar(`/api/users/friends/${user.username}`);
		}
	}

	const handleSetScale = (option: string) => {
		let input = document.getElementById(option);
		if (input) {
			input.style.transform = 'scale(1.3)';
		}
		setOpenCurrentOption((prev) => {
			if (prev !== '') {
				let prevInput = document.getElementById(prev);
				if (prevInput) {
					prevInput.style.transform = 'scale(1)';
				}
			}
			return option;
		});
	}

	const handleCurrentOption = (option: string) => {
		if (openCurrentOption === option) {
			return setOpenCurrentOption('');
		}
		handleSetScale(option);
		handlePlayersListOptions(option);
	}

	const socialCss: React.CSSProperties = {
		fontFamily: 'bitsSC',
		fontSize: '1.5rem',
		fontWeight: 'bold',
	}

	const cssDivButton: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '16.4rem',
		marginLeft: 'auto',
	}

	return (
		<div className='p-2 text-white' style={{height: '6rem'}}>
			<div className='d-flex align-items-center'>
				<p style={socialCss}>Social</p>
				<div style={cssDivButton}>
					<MdBlock
						id="blockFriend"
						type="button"
						size={20}
						onClick={() => handleCurrentOption('blockFriend')}
					/>
					<MdPersonRemoveAlt1
						id="deleteFriend"
						type="button"
						size={20}
						onClick={() => handleCurrentOption('deleteFriend')}
					/>
					<MdPersonAddAlt1
						id="addFriend"
						type="button"
						size={20}
						onClick={() => handleCurrentOption('addFriend')}

					/>
					<FaUserFriends
						type="button"
						id="friendsUsers"
						size={20}
						onClick={() => {handleCurrentOption('friendsUsers')}}
					/>
					<FaPeopleGroup
						type="button"
						id="allUsers"
						size={20}
						onClick={() => { handleCurrentOption('allUsers') }}
					/>
				</div>
			</div>
			{openCurrentOption === 'addFriend' ? <AddFriend /> : null}
			{openCurrentOption === 'deleteFriend' ? <DeleteFriend /> : null}
			{openCurrentOption === 'blockFriend' ? <BlockFriend /> : null}
		</div>
	)
}
