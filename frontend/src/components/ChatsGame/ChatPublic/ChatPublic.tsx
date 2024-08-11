import ListFriends, { Players } from "../../Profiles/SideBarProfile/PlayersList/ListFriends";
import DinamicProfile from "../../Profiles/DinamicProfile/DinamicProfile";

import { createContext, useContext, useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import { UserData } from "../../Contexts/Contexts";
import bgChatPublic from "../../../assets/game/backgrounds/bgChatPublic.png";
import RightSide from "./RightSide";
import ModalIsBanned from "./ModalIsBanned";

type User = {
	nickname: string,
	avatar: string,
	id: string,
	avatar_name: string,
}

export type Messages = {
	id: string,
	content: string,
	date: Date,
	user: User,
}

export type ChatData = {
	id: string,
	name: string,
	photo: string,
	members: Players[],
	banned: Players[],
	kicked: Players[],
	admin: Players[],
	mutted: {id: string}[],
	message: Messages[],
}

type DinamicProfile = {
	nickName: string,
	id: string,
}

export const ChatContext = createContext<{
	chatData: ChatData;
	setDataChat: React.Dispatch<React.SetStateAction<ChatData>>;
	setDinamicProfile: React.Dispatch<React.SetStateAction<DinamicProfile>>;
}>({
	chatData: {} as ChatData,
	setDataChat: () => { },
	setDinamicProfile: () => { }
});


type propsPageChats = {
	openPageChats: React.Dispatch<React.SetStateAction<string>>;
	chatName: string;
}

export default function ChatPublic(props: propsPageChats) {
	const [chatData, setDataChat] = useState<ChatData>({} as ChatData);
	const [dinamicProfile, setDinamicProfile] = useState<DinamicProfile>({} as DinamicProfile);
	const [showDinamicProfile, setShowDinamicProfile] = useState<string>('');
	const [showModal, setShowModal] = useState<{ show: boolean, msg: String }>({ show: false, msg: "" });


	return (
		<div className="rounded text-white
			position-absolute top-50 start-50 translate-middle h-75 w-75"
			style={{ backgroundImage: `url(${bgChatPublic})`, backgroundSize: 'cover' }}
		>
			{showModal.show ? <ModalIsBanned openPageChats={props.openPageChats} msg={showModal.msg} /> : null}
			<div className="row g-0 h-100 p-2">
				<ChatContext.Provider value={{ chatData: chatData, setDataChat, setDinamicProfile }}>
					<div className="col-3 border-end h-100">
						{/* <ListFriends
							players={chatData.members}
							getPlayers={() => { }}
							admin={chatData.admin}
							mute={chatData.mutted}
						/> */}
					</div>

					<div className="col-9 d-flex flex-column h-100 position-relative">
						<RightSide
							chatName={props.chatName}
							openPageChats={props.openPageChats}
						/>
					</div>
				</ChatContext.Provider>
			</div>


			{!showDinamicProfile ? null :
				<DinamicProfile
					openDinamicProfile={setShowDinamicProfile}
					nickName={dinamicProfile.nickName}
					id={dinamicProfile.id}
				/>
			}
		</div>
	)
}
