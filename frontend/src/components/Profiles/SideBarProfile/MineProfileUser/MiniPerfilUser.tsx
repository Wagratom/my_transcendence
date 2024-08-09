import { UserData } from "../../../Contexts/Contexts";
import React, { useContext, useState } from "react";
import StatusPlayer from "../statusPlayer";
import { CiSettings } from "react-icons/ci";
import OptionsMiniProfile from "./OptionsMiniProfile";
import GameConfiguration from "./Configurations/Configurations";

type propsMiniProfile = {
	handleInitialScreen: React.Dispatch<React.SetStateAction<string>>;
};

export default function MiniPerfilUser(props: propsMiniProfile) {
	const { user } = useContext(UserData);
	const [optionsConf, setOptionsConf] = useState<boolean>(false);
	const [openConfigurations, setOpenConfigurations] = useState<boolean>(false)

	if (user.nickname === "" || user.avatar === "") {
		return (
			<div className="d-flex p-3" style={{ height: "15vh" }}>
				<div className="spinner-border text-primary m-auto h-75" role="status">
					<span className="visually-hidden m-auto">Loading...</span>
				</div>
			</div>
		);
	}

	const showConfigurationsProfile = () => {
		if (!optionsConf) return null
		return (
			<OptionsMiniProfile
				openConfigurations={setOpenConfigurations}
				closedMineProfile={props.handleInitialScreen}
				id={user.id}
			/>
		)
	}

	const cssMainDiv: React.CSSProperties = {
		display: 'flex',
		padding: '1rem',
		color: 'white',
	}


	const cssDivInfoProfile: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
	}

	const cssPhotoProfile: React.CSSProperties = {
		height: '8rem',
		width: '8rem',
		borderRadius: '50%',
	}

	return (
		<div style={cssMainDiv}>
			<div style={cssDivInfoProfile} id="userStatus">
				<div>
					<img
						src={user.avatar}
						alt="Dinamic User"
						style={cssPhotoProfile}
						/>
				</div>
				<StatusPlayer status={user.status} nickName={user.nickname} />
			</div>
			<div className="ms-auto" id="settingsUser">
				<CiSettings
					className="d-flex ms-auto"
					type="button"
					size={20}
					color="white"
					onClick={() => setOptionsConf(!optionsConf)}
				/>
				{showConfigurationsProfile()}
			</div>
			{openConfigurations && <GameConfiguration openConfigurations={setOpenConfigurations}/>}
		</div>
	);
}
