// import { GiThreeFriends } from 'react-icons/gi';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserFriends } from 'react-icons/fa';
import { MdPersonRemoveAlt1, MdPersonAddAlt1 } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import { useState } from "react";
import AddFriend from "./AddFriend";
import DeleteFriend from "./DeleteFriend";
import BlockFriend from "./BlockFriend";


function Options() {
	//Function that shows and handle with social options in the sidebar
	const [openCurrentOption, setOpenCurrentOption] = useState('');

	const socialCss: React.CSSProperties = {
		fontFamily: 'bitsSC',
		fontSize: '1.5rem',
		fontWeight: 'bold',
	}

	const setCurrentOption = (option: string) => {
		if (openCurrentOption === option) {
			setOpenCurrentOption('');
		}
		else {
			setOpenCurrentOption(option);
		}
	}

	return (
		<div className='p-2 text-white'>
			<div className='d-flex align-items-center'>
				<p style={socialCss}>Social</p>
				<div className='d-flex justify-content-end align-items-center w-100 options'>
					<MdBlock
						id="blockFriend"
						className="me-2"
						type="button"
						size={20}
						onClick={() => setCurrentOption('BlockFriend')}
					/>
					<MdPersonRemoveAlt1
						id="deleteFriend"
						className="me-2"
						type="button"
						size={20}
						onClick={() => {
						}}
					/>
					<MdPersonAddAlt1
						id="addFriend"
						className="me-2"
						type="button"
						size={20}
						onClick={() => setCurrentOption('RemoveFriend')}
					/>
					<FaUserFriends
						id="listFriends"
						className="me-2"
						type="button"
						size={20}
						onClick={() => { }}
					/>
					<FaPeopleGroup
						id="addFriend"
						className="me-2"
						type="button"
						size={20}
						onClick={() => setCurrentOption('AddFriend')}
					/>
				</div>
			</div>
			{openCurrentOption === 'addFriend' ? <AddFriend /> : null}
			{openCurrentOption === 'DeleteFriend' ? <DeleteFriend /> : null}
			{openCurrentOption === 'BlockFriend' ? <BlockFriend /> : null}
		</div>
	)
}

export default Options
