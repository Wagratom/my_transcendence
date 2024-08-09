import InputNickname from "./InputNickname"

export default function DeleteFriend() {
	const handleDeleteFriend = (nickname: string) => {
		console.log('Delete friend')
	}

	return (
		<InputNickname _function={DeleteFriend} />
	)
}
