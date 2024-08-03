import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UserData, t_dataUser } from '../Contexts/Contexts';
import axios from 'axios';

export default function InicialPage() {
	// Function called to load the context with user information before rendering the game page
	const [infoUser, setInfoUser] = useState<t_dataUser>({} as t_dataUser);
	useEffect(() => {
		axios.get('https://localhost/api/users/getProfile', {
			timeout: 5000,
			withCredentials: true
		}).then((response) => {
			response.data.authorized = true
			setInfoUser(response.data)
		}).catch((error) => {
			if (error.response.status === 401) {
				let user : t_dataUser = {} as t_dataUser
				user.authorized = false
				setInfoUser(user)
			}
		})
	}, []);
	return (
		<>
			<UserData.Provider value={{ user: infoUser, updateDataUser: () => { } }}>
				<Outlet />
			</UserData.Provider>
		</>

	);
}
