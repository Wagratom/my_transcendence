import { UserData } from "../../../Contexts/Contexts";
import React, { useContext, useState } from "react";
import "./MineProfileUser.css";
import StatusPlayer from "../statusPlayer";
import { CiSettings } from "react-icons/ci";
import OptionsMiniProfile from "./OptionsMiniProfile";

type propsMiniProfile = {
	showMiniPerfil: React.Dispatch<React.SetStateAction<string>>;
};

export default function MiniPerfilUser(props: propsMiniProfile) {
	const { user } = useContext(UserData);
	const [optionsConf, setOptionsConf] = useState<boolean>(false);
	const [showConfigurations, setShowConfigurations] = useState<boolean>(false);

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
				showMiniPerfil={props.showMiniPerfil}
				showConfigurations={setShowConfigurations}
				id={user.id}
			/>
		)
	}

	const getProfilePhoto = () => {
		return (
			<div>
				<img
					className="img-thumbnail"
					src={user.avatar}
					alt="Dinamic User"
				/>
			</div>
		)
	}
	return (
		<div className="miniProfileUser">
			<div className="informationUser">
				{getProfilePhoto()}
				<StatusPlayer status={user.status} nickName={user.nickname} />
			</div>
			<div className="ms-auto">
				<CiSettings
					className="d-flex ms-auto"
					type="button"
					size={20}
					color="white"
					onClick={() => setOptionsConf(!optionsConf)}
				/>
				{showConfigurationsProfile()}
			</div>
		</div>
	);
}
