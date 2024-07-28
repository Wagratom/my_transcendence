import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
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
	updateDataUser: () => {},
})

export const UserProvider = ({Children}: any) => {
	const [infoUser, setGetInfoUser] = useState<t_dataUser>({} as t_dataUser);

	const updateUser = () => {
		console.log(Cookies.get('jwtToken'))
		axios.get('http://localhost:3000/users/getProfile'
		, {
			headers: {
				Authorization: Cookies.get('jwtToken'),
			}
		})
		.then((res) => {
			setGetInfoUser(res.data);
		}
		).catch(() => { })
	}

	return (
		<UserData.Provider value={{ user: infoUser, updateDataUser: updateUser }}>
			{Children}
		</UserData.Provider>
	)
}
