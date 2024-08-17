import { IoGameControllerOutline } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import PhotoAndStatus from "./PhotoAndStatus";
import axios from "axios";
import { UserData } from "../../../Contexts/Contexts";

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
	const { user } = useContext(UserData);

	useEffect(() => {
		axios.get(url)
		.then((response) => setPlayers(response.data))
		.catch((error) => console.log(error));
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
			{players.map((play) => {
				if (play.id === user.id) {
					return null;
				}
				return (
					<div className='d-flex hover mt-2 p-1' key={play.id}>
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
				)
			})}
		</div>
	);
}
