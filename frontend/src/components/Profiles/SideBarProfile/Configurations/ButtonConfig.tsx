import { IconType } from 'react-icons';
import backgroundButton from '../../../../assets/game/backgrounds/comfigurationsGame/bgButtonConfigurations.png';

type propsButtonConfigurations = {
	content: string;
	icon?: IconType;
	function?: (event: any) => void;
	type: "button" | "submit" | "reset";
}

export default function ButtonConfig(props: propsButtonConfigurations): JSX.Element {
	const cssButton: React.CSSProperties = {
		border: "none",
		backgroundImage: `url(${backgroundButton})`,
		backgroundSize: "cover",
		backgroundColor: "transparent",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",


		color: "white",
		width: "17rem",
		height: "2.5rem",
		padding: "0.6rem 0.5rem 0.5rem 0.5rem",
		gap: "0.5rem",
	}

	const cssButtonDiv: React.CSSProperties = {
		display: "flex",
		alignItems: "end",
		paddingBottom: "1rem",
	}

	const cssParagraph: React.CSSProperties = {
		fontSize: "1.7rem",
	}

	return (
		<div style={cssButtonDiv}>
			<button
				style={cssButton}
				onClick={(event) => {props.function && props.function(event) }}
				type={props.type}
			>
				{props.icon ? <props.icon /> : null}
				<p style={cssParagraph}>{props.content}</p>
			</button>
		</div>
	)
}
