import { UserData } from "../../../Contexts/Contexts";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./MineProfileUser.css";
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

	return (
		<div className="miniProfileUser">
			<div className="informationUser" id="userStatus">
				<div>
					<img className="img-thumbnail" src={user.avatar} alt="Dinamic User"/>
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
