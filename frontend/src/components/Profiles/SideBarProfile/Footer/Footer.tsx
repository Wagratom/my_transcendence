import axios from "axios";
import { useContext, useEffect } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { UserData } from "../../../Contexts/Contexts";


export default function Footer() {

	const getFriendRequests = () => {
		axios.get(`/api/users/getFriendRequests/`)
		.then((response) => {
			console.log(response.data)
		}).catch((err) => {
			console.log(err)
		})
	}

	useEffect(() => {
		getFriendRequests()
	}, [])

	const cssFooter: React.CSSProperties = {
		position: 'absolute',
		bottom: '0',
		width: '100%',
		marginLeft: 'auto',
		padding: '0 1rem 1rem 0',
		display: 'flex',
		alignContent: 'center',
		color: 'white'
	}

	return (
		<div style={cssFooter}>
			<IoMdNotifications size={20} style={{ marginLeft: 'auto' }} />
			<FaMessage size={20} style={{ marginLeft: '1rem', transform: 'scaleX(-1)' }} />
		</div>
	)
}

