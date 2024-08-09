import { useContext, useEffect, useState } from 'react';
import { Messages } from '../ChatPublic/ChatPublic';
import FormatMessages from '../FormatMessagens/FormatMessagens';
import InputChats from '../InputChats';
import './ChatPrivate.css'
import axios from 'axios';
import { UserData } from '../../Contexts/Contexts';
import TitleChatPrivate from './Title';
import { Socket } from 'socket.io-client';

type propsChatPrivate = {
	nick_name: string,
	avatar: string,
}

export default function ChatPrivate(props: propsChatPrivate) {
	const [messages, setMessages] = useState<Messages[]>([]);
	const [messageErr, setMessageErr] = useState<String>("");
	const userData = useContext(UserData).user;



	let obj = {
		my_nickname: userData.nickname,
		other_nickname: props.nick_name,
		content: '',
		route: 'direct-message',
	}

	return (
		<div className='text-white chat d-flex flex-column bg-degrader rounded' style={{zIndex: 2000}}>
			<TitleChatPrivate nickname={props.nick_name} avatar={props.avatar} />
			<div className='p-2 overflow-auto mt-auto text-black' id='messagens-chat'>
				<FormatMessages messagens={messages} user={userData} messageErr={messageErr}/>
			</div>
			<InputChats socket={userData.socket as Socket} obj={obj} disable={messageErr !== ""} />
		</div>
	);
}
