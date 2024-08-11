import StatusPlayer from "../MineProfileUser/PhotoAndStatus/statusPlayer"

type propsPhotoAndStatus = {
	avatar: string,
	isOnline: boolean,
	nickName: string,
}

export default function PhotoAndStatus(props: propsPhotoAndStatus): JSX.Element {
	const cssImageDiv: React.CSSProperties = {
		height: '4rem',
		width: '4rem',
		borderRadius: '50%',
		display: 'flex',
		alignContent: 'center',

	}

	const cssImage: React.CSSProperties = {
		height: '100%',
		width: '100%',
		borderRadius: '50%',
	}

	return (
		<>
			<div style={cssImageDiv}>
				<img
					className=""
					style={cssImage}
					src={props.avatar}
					alt='foto'
				// onClick={() => clickPhoto(play.id, play.nickname)}
				/>
			</div>
			<div>
				<StatusPlayer
					status={props.isOnline}
					nickName={props.nickName}
				/>
			</div>
		</>
	)
}
