import { useContext, useRef, useState } from "react";
import { IconType } from "react-icons";
import InputButton from "./InputButton";
import { UserData } from "../../../Contexts/Contexts";

type KickMemberProps = {
	Icon: IconType;
	content: string;
	my_id: string;
	chat_name: string;
	chat_id: string;
	id: string;
	route: string;
}

export default function ButtonTime(props: KickMemberProps): JSX.Element {
	const [showInput, setShowInput] = useState<boolean>(false);
	const kickHour = useRef<HTMLInputElement>(null);
	const kickDay = useRef<HTMLInputElement>(null);

	return (
		<>
			<h5 className="p-2 hover" onClick={() => setShowInput(!showInput)}>
				<props.Icon className="bg-light text-black me-3 p-1" size={30} />
				{props.content}
			</h5>

			{!showInput ? null :
				<div className="ps-5">
					<div className="form-check">
						<label className="form-check-label" htmlFor={props.id}>
							1 Hora
						</label>
						<input className="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id={props.id}
							ref={kickHour}>
						</input>
					</div>
					<div className="form-check">
						<label className="form-check-label" htmlFor={props.id + '1'}>
							1 Dia
						</label>
						<input
							className="form-check-input"
							type="radio"
							name="flexRadioDefault"
							id={props.id + '1'}
							ref={kickDay}
							defaultChecked >
						</input>
					</div>
					<InputButton function={ () => {} } />
				</div>
			}
		</>
	)
}
