import { createContext } from "react";
import { Socket } from "socket.io-client";

export type t_dataUser = {
	id: string;
	nickname: string;
	avatar: string;
	coins: number;
	twoFA: boolean;
	socket: Socket | undefined;
	avatar_name: string;
};

export const UserData = createContext<{
	user: t_dataUser;
	updateDataUser: () => void;
}>({
	user: {} as t_dataUser,
	updateDataUser: () => { },
})
