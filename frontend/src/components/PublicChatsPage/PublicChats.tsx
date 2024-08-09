import React, { SetStateAction, useState } from 'react';
import bgChats from '../../assets/game/backgrounds/bgChats.jpg'
import ScreenCreateNewChat from './ScreemCreateNewChat';
import BarOptions from './BarOptions';
import ChatList from './ChatsList';
import './PublicChats.css';
import ButtonClosed from '../GamePage/Game/ButtonClosed';
import ChatPublic from '../ChatsGame/ChatPublic/ChatPublic';

export type t_chat = {
	id: string;
	name: string;
	owner_nickname: string;
	photoUrl: string;
	password: string;
	type: string;
	onlines: number;
};

type propsPageChats = {
	openPageChats: React.Dispatch<SetStateAction<string>>;
}

export default function PageChats(props: propsPageChats) {
	const [chatList, setChatList] = useState<t_chat[]>([]);
	const [showCreateChat, setShowCreateChat] = useState(false);
	const [selectedChat, setSelectedChat] = useState({ click: false, chatName: '' });


	const cssDivChats: React.CSSProperties = {
		backgroundImage: `url(${bgChats})`,
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat',
		color: 'white',
		height: '75%',
		width: '75%',
		padding: '7%'
	}

	if (selectedChat.click === true) return <ChatPublic
		chatName={selectedChat.chatName}
		openPageChats={props.openPageChats}
	/>
	return (
		<div className='rounded position-absolute top-50 start-50 translate-middle'
			style={cssDivChats}
		>
			<ButtonClosed
				backgroundColor="#46668a"
				backgroundShadow="#0c1d3b"
				closed={props.openPageChats}
			/>
			<div className='d-flex flex-column h-100'>
				<BarOptions
					handleSearchChats={() => {}}
					setShowCreateChat={setShowCreateChat}
					getListPublicChats={() => {}}
					getListPrivateChats={() => {}}
				/>
				{!showCreateChat ? null :
					<ScreenCreateNewChat
						setShowCreateChat={setShowCreateChat}
						createNewChat={() => {}}
					/>
				}
				<div className='d-flex p-3 overflow-auto' id='showChats'>
					<ChatList
						listChats={chatList}
						clickedChat={(ChatName: string) => {
							setSelectedChat({ click: true, chatName: ChatName })
						}}
					/>
				</div>
			</div>
		</div>
	)
}
