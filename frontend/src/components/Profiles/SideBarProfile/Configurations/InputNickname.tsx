import backgroundNickname from '../../../../assets/game/backgrounds/comfigurationsGame/bgInputNickname.png';

export default function InputNickname(): JSX.Element {
	const cssInputNickname: React.CSSProperties = {
		backgroundImage: `url(${backgroundNickname})`,
		backgroundSize: 'cover',
		backgroundColor: 'transparent',
		color: 'white',
		fontFamily: '8bits',
		fontSize: '1.5rem',
		width: '23rem',
		height: '2.5rem',
	}

	const cssMainDiv: React.CSSProperties = {
		marginTop: 'auto',
		paddingBottom: '1rem'
	}
	return (
		<div style={cssMainDiv}>
			<label htmlFor="nickname" className="form-label">Password</label>
			<input
				id="nickname"
				name='nickname'
				style={cssInputNickname}
				type="text"
				className="form-control"
			/>

		</div>
	)
}
