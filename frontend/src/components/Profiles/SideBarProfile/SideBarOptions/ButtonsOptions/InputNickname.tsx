import { useRef } from 'react'
import backgroundInput from '../../../../../assets/game/backgrounds/sideBar/bgInputNickname.png'
import { IoSendSharp } from "react-icons/io5";

export default function InputNickname({ _function }: { _function: (nickname: string) => void }) {
	let nickname = useRef<HTMLInputElement>(null)

	const cssMainDiv: React.CSSProperties = {
		backgroundImage: `url(${backgroundInput})`,
		backgroundSize: 'cover',
		backgroundColor: 'transparent',

		display: 'flex',
		alignContent: 'center',
		alignItems: 'center',

		padding: '0 0.7rem 0 0.7rem',
		margin: '0.5rem 0.5rem 0 auto',
		width: '16.4rem',
		height: '2.4rem',
	}

	const cssNicknameInput: React.CSSProperties = {
		backgroundColor: 'transparent',
		border: 'none',
		color: 'white',
		fontSize: '1.5em',
		fontFamily: 'bitsSC',
		outline: 'none',
		width: '100%',
	}


	return (
		<div style={cssMainDiv}>
			<input
				ref={nickname}
				type='text'
				style={cssNicknameInput}
				placeholder='nickname'
			/>
			<IoSendSharp
				size={13}
				onClick={() => _function(nickname.current?.value || '')}
			/>
		</div>
	)
}
