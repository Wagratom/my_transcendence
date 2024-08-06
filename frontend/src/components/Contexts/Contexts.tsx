import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { Socket } from "socket.io-client";

export type t_dataUser = {
	id: string;
	username: string;
	nickname: string;
	avatar: string;
	status: boolean;

	coins: number;
	twoFA: boolean;
	socket: Socket | undefined;
	avatar_name: string;
	authorized: boolean;
};

export const UserData = createContext<{
	user: t_dataUser;
	updateDataUser: () => void;
}>({
	user: {} as t_dataUser,
	updateDataUser: () => {},
})
