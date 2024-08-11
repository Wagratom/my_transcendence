import { UserData } from "../../../Contexts/Contexts";
import React, { useContext } from "react";
import OptionsMiniProfile from "./Configurations/OptionsMiniProfile";
import PhotoAndStatus from "./PhotoAndStatus/PhotoAndStatus";

type propsMiniProfile = {
	handleInitialScreen: React.Dispatch<React.SetStateAction<string>>;
};

export default function MiniPerfilUser(props: propsMiniProfile) {
	const { user } = useContext(UserData);

	if (user.nickname === "" || user.avatar === "") {
		return (
			<div className="d-flex p-3" style={{ height: "15vh" }}>
				<div className="spinner-border text-primary m-auto h-75" role="status">
					<span className="visually-hidden m-auto">Loading...</span>
				</div>
			</div>
		);
	}


	const cssMainDiv: React.CSSProperties = {
		display: 'flex',
		padding: '1rem',
		color: 'white',
		height: '11rem',
	}

	return (
		<div style={cssMainDiv}>
			<PhotoAndStatus user={user} />
			<OptionsMiniProfile
				closedMineProfile={props.handleInitialScreen}
			/>
		</div>
	);
}
