import { useState } from "react";

type MatchHistoryType = {
	id: string;
	opponent_avatar: string;
	opponent: string;
	my_score: number;
	opponent_score: number;
	status: string;
};

export default function MatchHistory({ userId }: { userId: string }) {
	const [matchHistory, setMatchHistory] = useState<MatchHistoryType[]>([]);


	if (matchHistory.length === 0) {
		return (
			<div className='d-flex p-2 text-center p-5 justify-content-center align-items-center h-100'>
				<p className="fs-1">O jogador não possui nenhuma partida</p>
			</div>
		)
	}

	return (
		<div>
			{matchHistory.map((match: MatchHistoryType, index) => {
				return (
					<div className='d-flex p-2 justify-content-between hover text-center' key={index}>
						<div style={{ height: '4rem' }}>
							<img className='img-fluid rounded-circle h-100' src={`data:image/jpeg;base64, ${match.opponent_avatar} `} alt={`avatar do ${match.opponent} `} />
						</div>
						<div className='fs-5 col-3'>
							<p>Oponente</p>
							<p>{match.opponent}</p>
						</div>
						<div className='fs-5 fw-bold col-2'>
							<p>HISTORY</p>
							<p>{`${match.opponent_score} X ${match.my_score}`}</p>
						</div>
						<p className='letter-pixel fs-1 derrota'>{match.status}</p>
					</div>
				)
			})}
		</div>
	);
}

//TODO: Remover outro Profile
