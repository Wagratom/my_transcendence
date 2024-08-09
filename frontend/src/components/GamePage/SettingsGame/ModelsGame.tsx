import ButtonModelsGame from "./ButtonModelsGame";
import playPong from '../../../assets/settingsGame/playPong.jpg'
import playSpecialPong from '../../../assets/settingsGame/playSpecialPong.jpg'
import bgFire from "../../../assets/game/backgrounds/bgFire.jpg";
import React, { useState } from "react";

export default function ModelsGame(): JSX.Element {

	const cssDivFilhoSelectGame: React.CSSProperties = {
		position: 'relative',
		zIndex: 2,

		backgroundColor: '#ed9121',
		borderRadius: '1rem',
		boxShadow: '1px 2px 2px black inset, 0px -2px 2px #FFF inset',
		opacity: '1 !important',
		backgroundImage: `url(${bgFire})`,
		backgroundSize: 'cover',
	}

	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div style={cssDivFilhoSelectGame}>
			<button onClick={openModal}>Regras do Jogo!</button>

			{/* tinha um modal aqui */}

			<div className="d-flex p-3" id='divOptionsStartGame'>
				<ButtonModelsGame
					photo={playPong}
					model="Normal"
					isRanking={false}
				/>
				<ButtonModelsGame
					photo={playPong}
					model="Ranqueado"
					isRanking={true}
				/>
				<ButtonModelsGame
					photo={playPong}
					model="VS COOP"
				/>
			</div>

			<div className="d-flex p-3">
				<ButtonModelsGame
					photo={playSpecialPong}
					model="Normal"
				/>
				<ButtonModelsGame
					photo={playSpecialPong}
					model="Ranqueado"
				/>
				<ButtonModelsGame
					photo={playSpecialPong}
					model="VS COOP"
				/>
			</div>
		</div>
	)
}
