import { AiOutlineSound } from "react-icons/ai";
import { IoMusicalNotes } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";

export default function ButtonsPainelIcons(): JSX.Element {
	const cssButtonsDiv: React.CSSProperties = {
		display: 'flex',
	}

	const cssButton: React.CSSProperties = {
		border: 'none',
		borderRadius: '1rem',
		backgroundColor: 'transparent',
		padding: '0',
		margin: '0',
	}
	return (
		<div style={cssButtonsDiv}>
			<button style={cssButton}>
				<TbArrowBackUp color="white" size={15}/>
			</button>
			<button className="ms-5" style={cssButton}>
				<AiOutlineSound color="white" size={15} />
			</button>
			<button className="ms-5" style={cssButton}>
				<IoMusicalNotes color="white" size={15}/>
			</button>
		</div>
	)
}
