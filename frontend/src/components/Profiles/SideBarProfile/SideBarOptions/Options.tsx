import { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserFriends } from 'react-icons/fa';
import { MdPersonRemoveAlt1, MdPersonAddAlt1 } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import AddFriend from "./ButtonsOptions/AddFriend";
import DeleteFriend from "./ButtonsOptions/DeleteFriend";
import BlockFriend from "./ButtonsOptions/BlockFriend";

function Options() {
	//Function that shows and handle with social options in the sidebar
	const [openCurrentOption, setOpenCurrentOption] = useState('');

	const setCurrentOption = (option: string) => {
		let input = document.getElementById(option);
		if (openCurrentOption === option) {
			setOpenCurrentOption('');
		}
		else {
			setOpenCurrentOption((prev) => {
				if (input) {
					input.style.transform = 'scale(1.3)';
				}
				if (prev !== '') {
					let prevInput = document.getElementById(prev);
					if (prevInput) {
						prevInput.style.transform = 'scale(1)';
					}
				}
				return option;
			});
		}
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
		<div className='p-2 text-white'>
			<div className='d-flex align-items-center'>
				<p style={socialCss}>Social</p>
				<div style={cssDivButton}>
					<MdBlock
						id="blockFriend"
						type="button"
						size={20}
						onClick={() => setCurrentOption('blockFriend')}
					/>
					<MdPersonRemoveAlt1
						id="deleteFriend"
						type="button"
						size={20}
						onClick={() => setCurrentOption('deleteFriend')}
					/>
					<MdPersonAddAlt1
						id="addFriend"
						type="button"
						size={20}
						onClick={() => setCurrentOption('addFriend')}

					/>
					<FaUserFriends
						type="button"
						size={20}
						onClick={() => { }}
					/>
					<FaPeopleGroup
						type="button"
						size={20}
						onClick={() => { }}
					/>
				</div>
			</div>
			{openCurrentOption === 'addFriend' ? <AddFriend /> : null}
			{openCurrentOption === 'deleteFriend' ? <DeleteFriend /> : null}
			{openCurrentOption === 'blockFriend' ? <BlockFriend /> : null}
		</div>
	)
}

export default Options
