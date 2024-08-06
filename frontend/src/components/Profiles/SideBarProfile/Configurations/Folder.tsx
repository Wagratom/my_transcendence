import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import ButtonConfig from "./ButtonConfig";
import { AiOutlineLinkedin } from "react-icons/ai";
import { UserData } from "../../../Contexts/Contexts";
import { useContext } from "react";

export default function FolderSettingsGame(): JSX.Element {
	const { user } = useContext(UserData);
	const cssFooter: React.CSSProperties = {
		position: 'absolute',
		bottom: '0',
		left: '50%',
		transform: 'translateX(-50%)',
		padding: '0 3.5rem 4rem 3.5rem',
		width: '100%',
	}

	const contentFooter: React.CSSProperties = {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
	}

	const contentRedirectsIcons: React.CSSProperties = {
		display: 'flex',
		gap: '0.5rem',
	}

	const putProfilePhoto = () => {
		let imgProfile = document.getElementById('imageProfile') as HTMLImageElement
		if (imgProfile) {
			imgProfile.src = user.avatar
		}
	}

	return (
		<footer style={cssFooter}>
			<hr />
			<div style={contentFooter}>
				<ButtonConfig content="DISCARD SETTINGS" type="reset" function={putProfilePhoto}/>
				<div style={contentRedirectsIcons}>
					<a className="text-light" type="button" href="https://github.com/Wagratom">
						<FaGithub size={30} />
					</a>
					<a className="text-light" type="button" href="https://www.instagram.com/wagratom/">
						<IoLogoInstagram size={30} />
					</a>
					<a className="text-light" type="button" href="https://www.linkedin.com/in/wagratom-wallas-9657a421a/">
						<AiOutlineLinkedin size={30} />
					</a>
				</div>
				<ButtonConfig content="SAVE SETTINGS" type="submit"/>
			</div>
		</footer>
	)
}
