import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";


export default function Footer() {
	const cssFooter: React.CSSProperties = {
		position: 'absolute',
		bottom: '0',
		width: '100%',
		marginLeft: 'auto',
		padding: '0 1rem 1rem 0',
		display: 'flex',
		alignContent: 'center',
	}
	
	return (
		<div style={cssFooter}>
			<IoMdNotifications size={20} style={{ marginLeft: 'auto' }} />
			<FaMessage size={20} style={{ marginLeft: '1rem', transform: 'scaleX(-1)' }} />
		</div>
	)
}

