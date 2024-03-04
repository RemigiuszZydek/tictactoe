import "./App.css";
import Board from "./Board";
import { useState } from "react";

function App() {
	const [key, setKey] = useState(0);

	const restartGame = () => {
		setKey((prevKey) => prevKey + 1);
	};
	return (
		<div className="App">
			<h1 className="Title">Tic Tac Toe</h1>
			<Board key={key} />
			<button onClick={restartGame}>Restartuj</button>
		</div>
	);
}

export default App;
