import { t_dataUser } from "../../../../Contexts/Contexts"
import StatusPlayer from "./statusPlayer"

export default function PhotoAndStatus({user}: {user: t_dataUser}) : JSX.Element {
	const cssDivInfoProfile: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
	}

	const cssPhotoProfile: React.CSSProperties = {
		height: '8rem',
		width: '8rem',
		borderRadius: '50%',
	}

	return (
		<div style={cssDivInfoProfile} id="userStatus">
				<div>
					<img
						src={user.avatar}
						alt="Dinamic User"
						style={cssPhotoProfile}
						/>
				</div>
				<StatusPlayer status={user.status} nickName={user.nickname} />
			</div>
	)
}
