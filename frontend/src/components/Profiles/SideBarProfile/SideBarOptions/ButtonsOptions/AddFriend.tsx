import InputNickname from "./InputNickname"

export default function AddFriend() {
	const handleAddFriend = (nickname: string) => {
		console.log('add friend')
	}

	return (
		<InputNickname _function={handleAddFriend} />
	)
}
