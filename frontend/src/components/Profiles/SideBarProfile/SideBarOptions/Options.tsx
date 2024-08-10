import SocialBar from "./socialOptions/SocialBar";
import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";


function Options() {
	//Function that shows and handle with social options in the sidebar

	const cssFooter: React.CSSProperties = {
		position: 'absolute',
		bottom: '0',
		width: '100%',
		marginLeft: 'auto',
		padding: '0 1rem 1rem 0',
		display: 'flex',
	}


	return (
		<div className='p-2 text-white'>
			<SocialBar />
			<div style={cssFooter}>
				<FaMessage size={18} style={{marginLeft: 'auto', transform: 'scaleX(-1)'}} />
				<IoMdNotifications size={22} style={{marginLeft: '1rem'}} />
			</div>
		</div>
	)
}

export default Options
