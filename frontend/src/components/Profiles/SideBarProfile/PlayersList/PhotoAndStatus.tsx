import StatusPlayer from "../MineProfileUser/PhotoAndStatus/statusPlayer"

type propsPhotoAndStatus = {
	avatar: string,
	isOnline: boolean,
	nickName: string,
}

export default function PhotoAndStatus(props: propsPhotoAndStatus): JSX.Element {
	const cssImageDiv: React.CSSProperties = {
		height: '5rem',
		width: '5rem',
		borderRadius: '50%',
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
					className="img-thumbnail"
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
