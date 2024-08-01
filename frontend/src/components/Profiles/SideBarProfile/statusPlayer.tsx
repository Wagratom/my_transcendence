type propsStatusPlayer = {
	status: boolean;
	nickName: string;
}
export default function StatusPlayer(props: propsStatusPlayer) {
	if (props.status) {
		return (
			<div style={{marginLeft: '1rem'}}>
				<p className="fs-4">{props.nickName}</p>
				<div className="statusPlayer">
					<div className='statusOnlineBorder'>
						<div className='statusOnlineCenter'>
						</div>
					</div>
					<p className="fs-5 me-3" >Online</p>
				</div>
			</div>
		);
	}
	return <div></div>
}
