import Button from "./Button";
import { MdOutlinePersonAddDisabled, MdDeleteSweep } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GiBroadDagger } from 'react-icons/gi';
import { MdBlock } from "react-icons/md";
import axios from "axios";
import { FormEvent, useContext } from "react";
import { ChatContext } from "../ChatPublic";
import AlterPassword from "./AlterPassword";
import { UserData } from "../../../Contexts/Contexts";
import ButtonTime from "./KickMember";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BiMessageRoundedX } from "react-icons/bi";

type UsersGame = {
	id: string;
	nickname: string;
	avatar: string;
	is_active: boolean;
}

export default function AllButtons(): JSX.Element {
	const { chatData: { name, id } } = useContext(ChatContext);
	const dataUser = useContext(UserData).user;
	const userData = useContext(UserData).user;



	return (
		<div className="p-3 text-start position-relative">
			<Button
				Icon={AiOutlineUserAdd}
				content="Adicionar Pessoas"
				function={() => {}}
			/>
			<Button
				Icon={GiBroadDagger}
				content="Adicionar Administrador"
				function={() => {}}
			/>
			<Button
				Icon={GiBroadDagger}
				content="Remover Administrador"
				function={() => {}}
			/>
			<Button
				Icon={MdOutlinePersonAddDisabled}
				content="Banir Tripulante"
				function={() => {}}
			/>
			<ButtonTime
				Icon={MdBlock}
				content="Chutar Tripulante"
				my_id={dataUser.id}
				chat_name={name}
				chat_id={id}
				id={"kick"}
				route="kick-member-group"
			/>

			<ButtonTime
				Icon={BiMessageRoundedX}
				content="Mutar Tripulante"
				my_id={dataUser.id}
				chat_name={name}
				chat_id={id}
				id={"mute"}
				route="mute-member-group"
			/>

			<AlterPassword funcChange={() => {}} />
			<Button
				Icon={MdDeleteSweep}
				content="Apagar Grupo"
				function={() => {}}
			/>

			<Button
				Icon={IoIosRemoveCircleOutline}
				content="remover senha"
				function={() => {}}
			/>

		</div>
	)
}
//TODO: Alter password Bug
