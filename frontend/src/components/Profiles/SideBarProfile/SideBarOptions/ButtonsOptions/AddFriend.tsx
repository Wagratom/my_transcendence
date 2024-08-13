import axios from "axios"
import InputNickname from "./InputNickname"

export default function AddFriend() {
	const handleAddFriend = (nickname: string) => {
		console.log('add friend: ', nickname)
		axios.post('/api/users/addFriend', { username: nickname })
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	return (
		<InputNickname _function={handleAddFriend} />
	)
}
