import { useState, useEffect } from 'react'
import './App.css'

import { HangedImage } from './Components/HangedImage'
import { OnPageKeyboard, onScreenKeyEvent } from './Components/OnPageKeyboard'
import { Word, pickRandomWord } from './helpers/words'

function App() {
	const [attempt, setAttempt] = useState(0);
	const [word, setWord] = useState(pickRandomWord());
	const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.word.length));
	const [lost, setLost] = useState(false);
	const [won, setWon] = useState(false);

	// Condición de derrota
	useEffect(() => {
		if (attempt === 6) {
			setLost(true);
		}
	}, [attempt]);

	// Condición de victoria
	useEffect(() => {
		const currentWord = hiddenWord.replaceAll(' ', '');
		if ( currentWord === word.word ) {
			setWon(true);
		}
	}, [hiddenWord]);
	
	let onKeyPressed = (e: onScreenKeyEvent) => {
		if (lost || won) return;

		if (!word.word.includes(e.key)) {
			setAttempt(Math.min(6, attempt + 1));
			return;
		}
		let hiddenAux = hiddenWord.split(' ');
		for (let i = 0; i < word.word.length; i++) {
			if (e.key === word.word.at(i)) {
				hiddenAux[i] = `${e.key}`;
			}
		}

		setHiddenWord(hiddenAux.join(' '));
	}

	let newGame = () => {
		const newWord: Word = pickRandomWord();

		setWord(newWord);
		setHiddenWord('_ '.repeat(newWord.word.length))
		setAttempt(0);
		setWon(false);
		setLost(false);
	}

	console.log(word);

	return (
		<div className="App">
			{/* Prompt */}
			<h2>Es un {word.type} con valencias: {word.valences}</h2>

			{/* img */}
			<HangedImage imgIndex={attempt} />

			{/* Random word */}
			<h3>{hiddenWord}</h3>

			{
				(lost)? <h2>Perdiste, la palabra secreta era "{word.word}"</h2> : ''
			}

			{
				won ? <h2>Ganaste!! Tu puntaje es {Math.round((6-attempt)*100/6)}</h2>: ''
			}

			{/* Letter buttons */}
			<OnPageKeyboard onKeyPressed={onKeyPressed} />

			<br /><br />
			<div style={{alignItems: 'center', alignContent: 'center'}}>
				<button onClick={newGame}>Jugar de nuevo</button>
				<button onClick={() => {
					alert(`El símbolo del elemento es "${word.symbol}"`);
				}}>Ayuda</button>
				<button onClick={() => {
					alert('Gamificación de la tabla de valencias\nAutor: Sebastián Contreras');
				}}>Sobre el juego</button>
			</div>
		</div>
	)
}

export default App
