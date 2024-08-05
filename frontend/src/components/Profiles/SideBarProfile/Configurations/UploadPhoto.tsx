import React, { useRef } from "react"
import { IoCloudUploadSharp } from "react-icons/io5";
import ButtonConfig from "./ButtonConfig";
import bordaImage from '../../../../assets/game/backgrounds/comfigurationsGame/bgPhotoConfigurations.png'

export default function UploadPhoto({ photo }: { photo: string }): JSX.Element {
	const inputFile = useRef<HTMLInputElement>(null);
	const imageProfile = useRef<HTMLImageElement>(null);

	const centralizePhoto: React.CSSProperties = {
		display: "flex",
		justifyContent: "center",
		marginBottom: "1rem",
		height: '10rem',
	}

	const borderImage: React.CSSProperties = {
		position: 'absolute',
		height: '10rem',
		width: '10rem',
		backgroundImage: `url(${bordaImage})`,
		backgroundSize: 'cover',
	}

	const imageSize: React.CSSProperties = {
		height: '9,5rem',
		width: '9.5rem',
		borderRadius: '2rem',
	}

	const clickInputFile = (event: any) => {
		event.preventDefault();
		inputFile.current?.click();
	}

	const alterPhoto = () => {
		const file = inputFile.current?.files?.[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const contentImg = event.target?.result as string;
				imageProfile.current!.src = contentImg;
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="ms-auto">
			<div style={centralizePhoto}>
				<div style={borderImage}></div>
				<img style={imageSize} src={photo} alt="Perfil do usuario que aparece dinamicamente" ref={imageProfile} />
				<input className="d-none" type="file" ref={inputFile} onChange={alterPhoto} />
			</div>
			<ButtonConfig
				content="upload photo"
				icon={IoCloudUploadSharp}
				function={clickInputFile}
			/>
		</div>
	)
}
