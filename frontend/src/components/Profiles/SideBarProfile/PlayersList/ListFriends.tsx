import { IoGameControllerOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import PhotoAndStatus from "./PhotoAndStatus";

export type Players = {
	avatar: string,
	id: string,
	username: string,
	nickname: string,
	isOnline: boolean,
	match_status: string
}

export default function ListFriends({ url }: { url: string }) {
	const [players, setPlayers] = useState<Players[]>([]);
	const play: Players = {
		avatar: 'https://i.pinimg.com/564x/9e/06/76/9e06761c17880933a485695ee961205c.jpg',
		id: '0',
		username: 'prometheus',
		nickname: 'prometheus',
		isOnline: false,
		match_status: ''
	};

	useEffect(() => {
		// axios.get(url).then((response) => {
		// 	console.log(response.data);
		// 	setPlayers(response.data);
		// });
	}, [url]);

	// onClick={() => handleOpenChatPrivate(play.nickname, play.avatar)}
	const cssMainDiv: React.CSSProperties = {
		padding: '0 1rem 0 1rem',
		color: 'white',
		overflow: 'auto',
		height: '77%',
	}
	return (
		<div style={cssMainDiv}>
			<div className='d-flex hover mt-2' key={play.id}>
				<PhotoAndStatus
					avatar={play.avatar}
					isOnline={play.isOnline}
					nickName={play.username}
				/>
				<div className='ms-auto d-flex align-items-center'>
					<IoGameControllerOutline
						size={30}
						className='text-warning'
					// onClick={() => createMatch(play.id)}
					/>
				</div>
			</div>


		</div>
	);
}
