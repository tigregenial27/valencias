import { letters } from '../helpers/letters'

export interface onScreenKeyEvent {
	key: string;
}

interface Props {
	onKeyPressed: (e: onScreenKeyEvent) => void
}

export function OnPageKeyboard(props: Props) {
	return (
		<>{letters.map(letter => <button key={letter} onClick={() => {
			props.onKeyPressed({key: letter})
		}} >{letter}</button>)}</>
	)
}

