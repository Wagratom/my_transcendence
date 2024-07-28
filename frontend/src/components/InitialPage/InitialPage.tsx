import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UserData, t_dataUser } from '../Contexts/Contexts';

export default function InicialPage() {
	// Function called to load the context with user information before rendering the game page

	const [infoUser, setGetInfoUser] = useState<t_dataUser>({} as t_dataUser);


	return (
		<UserData.Provider value={{ user: infoUser, updateDataUser: () => {} }}>
			<Outlet />
		</UserData.Provider>

	);
}
