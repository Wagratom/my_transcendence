import './index.css';
import { Login } from './components/LoginPage/Login';
import InicialPage from './components/InitialPage/InitialPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/GamePage/Game/Game';
import GameWW from './components/GamePage/Game/GameWW';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/game/" element={<InicialPage />}>
						<Route index element={<Game />} />
						<Route path="pong/:room" element={<GameWW />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
