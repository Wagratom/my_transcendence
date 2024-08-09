import axios from "axios"
import React, { useState } from "react"
import AvatarAndUser from "./AvatarAndUser"
import Score from "./Score"

export type typeRaking = {
	id: string
	avatar: string
	nickname: string
	avatar_name: string

	points: number
	draws: number
	ladder: number
	loses: number
	matches: number
	wins: number
}

export default function TopRank() {
	const [ranking, setRanking] = useState<typeRaking[]>([])


	let itemsCenter = "row g-0 h-100 d-flex align-items-center justify-content-center"

	const cssDivRanking: React.CSSProperties = {
		backgroundColor: '#684640',
		height: '4rem',
	}
	return (
		<>
			{ranking.map((user, index) => (
				<div className="row g-0 text-center shadow-grounps p-1 mt-2 fw-bold" key={user.id} style={cssDivRanking}>
					<div className="col-5 h-100">
						<div className={itemsCenter}>
							<div className="col-2">
								<p>{index + 1}</p>
							</div>
							<div className="col-10 h-100 p-1">
								<AvatarAndUser avatarUrl={`data:image/jpeg;base64, ${user.avatar}`} nickname={user.avatar_name} />
							</div>
						</div>
					</div>

					<div className="col-2"></div>

					<div className="col-5 h-100">
						<div className={itemsCenter}>
							<div className="col-10 h-100">
								<Score statusPart={user} />
							</div>
							<div className="col-2 h-100 d-flex">
								<p className="m-auto">{user.points}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
