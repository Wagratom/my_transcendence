type propsStatusPlayer = {
	status: boolean;
	nickName: string;
}


export default function StatusPlayer(props: propsStatusPlayer) {
	const cssDivMain: React.CSSProperties = {
		marginLeft: '1rem',
		fontSize: '1.5rem',
	}

	const statusPlauerDiv: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
	}

	const statusBorder: React.CSSProperties = {
		backgroundColor: 'rgb(245, 229, 229)',
		borderRadius: '50%',
		position: 'relative',

		width: '1rem',
		height: '1rem',
	}

	const statusOnlineCenter: React.CSSProperties = {
		backgroundColor: '#64a338',
		height: '0.8rem',
		width: '0.8rem',
		borderRadius: '50%',

		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	}

	const statusOflineCenter: React.CSSProperties = {
		backgroundColor: '#792e2e',
		height: '0.8rem',
		width: '0.8rem',
		borderRadius: '50%',

		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	}

	const status = props.status ? statusOnlineCenter : statusOflineCenter
	return (
		<div style={cssDivMain}>
			<p className="fs-4">{props.nickName}</p>
			<div style={statusPlauerDiv}>
				<div style={statusBorder}>
					<div style={status}></div>
				</div>
				<p className="fs-5 me-3" >Online</p>
			</div>
		</div>
	);
}
