import backgroundInput from '../../../../assets/game/backgrounds/sideBar/bgInputNickname.png'
import InputNickname from './InputNickname'
export default function BlockFriend() {

	const handleBlockUser = (nickname: string) => {
		console.log('block user')
	}

	return (
		<InputNickname _function={handleBlockUser} />
	)
}
