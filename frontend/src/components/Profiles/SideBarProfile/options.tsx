// import { GiThreeFriends } from 'react-icons/gi';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserFriends } from 'react-icons/fa';
import { MdPersonRemoveAlt1, MdPersonAddAlt1 } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import { useState } from "react";


function Options() {
	//Function that shows and handle with social options in the sidebar

	const [inputAddFriend, setInputAddFriend] = useState(false);
	const [inputDLTFriend, setInputDLTFriend] = useState(false);
	const [inputBLOCKFriend, setInputBLOCKFriend] = useState(false);

	const socialCss: React.CSSProperties = {
		fontFamily: 'bitsSC',
		fontSize: '1.5rem',
		fontWeight: 'bold',
	}


	return (
		<div className='p-2 text-white'>
			<div className='d-flex align-items-center'>
				<p style={socialCss}>Social</p>
				<div className='d-flex justify-content-end align-items-center w-100 options'>
					<MdBlock
						className="me-2"
						type="button"
						size={30}
						onClick={
							() => {
								setInputAddFriend(false)
								setInputDLTFriend(false)
								setInputBLOCKFriend(!inputBLOCKFriend)
							}
						}
					/>
					<MdPersonRemoveAlt1
						className="me-2"
						type="button"
						size={30}
						onClick={() => {
							setInputBLOCKFriend(false)
							setInputAddFriend(false)
							setInputDLTFriend(!inputDLTFriend)
						}}
					/>
					<MdPersonAddAlt1
						className="me-2"
						type="button"
						size={30}
						onClick={
							() => {
								setInputBLOCKFriend(false)
								setInputDLTFriend(false)
								setInputAddFriend(!inputAddFriend)
							}
						}
					/>
					<FaUserFriends
						className="me-2"
						type="button"
						size={30}
						onClick={() => { }}
					/>
					<FaPeopleGroup
						className="me-2"
						type="button" size={30} onClick={() => { }}
					/>
				</div>
			</div>
			{inputAddFriend ? returnInput(addNewFriend) : null}}
			{inputDLTFriend ? returnInput(DeleteFriend) : null}}
			{inputBLOCKFriend ? returnInput(BlockUser) : null}}
		</div>
	)
}

export default Options
