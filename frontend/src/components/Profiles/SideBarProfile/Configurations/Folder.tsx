import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import ButtonConfig from "./ButtonConfig";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function FolderSettingsGame(): JSX.Element {
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

	return (
		<footer style={cssFooter}>
			<hr />
			<div style={contentFooter}>
				<ButtonConfig content="DISCARD SETTINGS" />
				<div style={contentRedirectsIcons}>
					<a type="button" href="https://github.com/Wagratom">
						<FaGithub size={30} />
					</a>
					<a type="button" href="https://www.instagram.com/wagratom/">
						<IoLogoInstagram size={30} />
					</a>
					<a type="button" href="https://www.linkedin.com/in/wagratom-wallas-9657a421a/">
						<AiOutlineLinkedin size={30} />
					</a>
				</div>
				<ButtonConfig content="SAVE SETTINGS" />
			</div>
		</footer>
	)
}
