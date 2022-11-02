export interface Word {
	word: string,
	valences: string,
	symbol: string,
	type: 'Metal' | 'No metal' | 'Anfótero'
}

export const dictionary: Word[] = [
	{
		word: 'LITIO',
		valences: '+1',
		symbol: 'Li',
		type: 'Metal'
	},
	{
		word: 'SODIO',
		valences: '+1',
		symbol: 'Na',
		type: 'Metal'
	},
	{
		word: 'POTASIO',
		valences: '+1',
		symbol: 'K',
		type: 'Metal'
	},
	{
		word: 'RUBIDIO',
		valences: '+1',
		symbol: 'Rb',
		type: 'Metal'
	},
	{
		word: 'CESIO',
		valences: '+1',
		symbol: 'Cs',
		type: 'Metal'
	},
	{
		word: 'FRANCIO',
		valences: '+1',
		symbol: 'Fr',
		type: 'Metal'
	},
	{
		word: 'PLATA',
		valences: '+1',
		symbol: 'Ag',
		type: 'Metal'
	},
	{
		word: 'CALCIO',
		valences: '+2',
		symbol: 'Ca',
		type: 'Metal'
	},
	{
		word: 'BARIO',
		valences: '+2',
		symbol: 'Ba',
		type: 'Metal'
	},
	{
		word: 'RADIO',
		valences: '+2',
		symbol: 'Ra',
		type: 'Metal'
	},
	{
		word: 'BERILIO',
		valences: '+2',
		symbol: 'Be',
		type: 'Metal'
	},
	{
		word: 'CADMIO',
		valences: '+2',
		symbol: 'Cd',
		type: 'Metal'
	},
	{
		word: 'ESTRONCIO',
		valences: '+2',
		symbol: 'Sr',
		type: 'Metal'
	},
	{
		word: 'MAGNESIO',
		valences: '+2',
		symbol: 'Mg',
		type: 'Metal'
	},
	{
		word: 'ZINC',
		valences: '+2',
		symbol: 'Zn',
		type: 'Metal'
	},
	{
		word: 'ALUMINIO',
		valences: '+3',
		symbol: 'Al',
		type: 'Metal'
	},
	{
		word: 'COBRE',
		valences: '+1, +2',
		symbol: 'Cu',
		type: 'Metal'
	},
	{
		word: 'MERCURIO',
		valences: '+1, +2',
		symbol: 'Hg',
		type: 'Metal'
	},
	{
		word: 'ORO',
		valences: '+1, +3',
		symbol: 'Au',
		type: 'Metal'
	},
	{
		word: 'HIERRO',
		valences: '+2, +3',
		symbol: 'Fe',
		type: 'Metal'
	},
	{
		word: 'COBALTO',
		valences: '+2, +3',
		symbol: 'Co',
		type: 'Metal'
	},
	{
		word: 'NIQUEL',
		valences: '+2, +3',
		symbol: 'Ni',
		type: 'Metal'
	},
	{
		word: 'ESTAÑO',
		valences: '+2, +4',
		symbol: 'Sn',
		type: 'Metal'
	},
	{
		word: 'PLOMO',
		valences: '+2, +4',
		symbol: 'Pb',
		type: 'Metal'
	},
	{
		word: 'PLATINO',
		valences: '+2, +4',
		symbol: 'Pt',
		type: 'Metal'
	},
	{
		word: 'FLUOR',
		valences: '-1, +1',
		symbol: 'F',
		type: 'No metal'
	},
	{
		word: 'CLORO',
		valences: '-1, +1, +3, +5, +7',
		symbol: 'Cl',
		type: 'No metal'
	},
	{
		word: 'BROMO',
		valences: '-1, +1, +3, +5, +7',
		symbol: 'Br',
		type: 'No metal'
	},
	{
		word: 'IODO',
		valences: '-1, +1, +3, +5, +7',
		symbol: 'I',
		type: 'No metal'
	},
	{
		word: 'AZUFRE',
		valences: '-2, +2, +4, +6',
		symbol: 'S',
		type: 'No metal'
	},
	{
		word: 'SELENIO',
		valences: '-2, +2, +4, +6',
		symbol: 'Se',
		type: 'No metal'
	},
	{
		word: 'TELURO',
		valences: '-2, +2, +4, +6',
		symbol: 'Te',
		type: 'No metal'
	},
	{
		word: 'NITROGENO',
		valences: '-3, +3, +5',
		symbol: 'N',
		type: 'No metal'
	},
	{
		word: 'FOSFORO',
		valences: '-3, +3, +5',
		symbol: 'P',
		type: 'No metal'
	},
	{
		word: 'ARSENICO',
		valences: '-3, +3, +5',
		symbol: 'As',
		type: 'No metal'
	},
	{
		word: 'ANTIMONIO',
		valences: '-3, +3, +5',
		symbol: 'Sb',
		type: 'No metal'
	},
	{
		word: 'BORO',
		valences: '-3, +3',
		symbol: 'B',
		type: 'No metal'
	},
	{
		word: 'CARBONO',
		valences: '-4, +4',
		symbol: 'C',
		type: 'No metal'
	},
	{
		word: 'SILICIO',
		valences: '-4, +4',
		symbol: 'Si',
		type: 'No metal'
	},
	{
		word: 'MANGANESO',
		valences: '+2, +3, +4, +6, +7',
		symbol: 'Mn',
		type: 'Anfótero'
	},
	{
		word: 'CROMO',
		valences: '+2, +3, +6',
		symbol: 'Cr',
		type: 'Anfótero'
	},
	{
		word: 'BISMUTO',
		valences: '+3, +5',
		symbol: 'Bi',
		type: 'Anfótero'
	},
	{
		word: 'HIDROGENO',
		valences: '-1, +1',
		symbol: 'H',
		type: 'Anfótero'
	},
	{
		word: 'OXIGENO',
		valences: '-2',
		symbol: 'O',
		type: 'Anfótero'
	}
];


function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}


export function pickRandomWord(): Word {
	let index = randomIntFromInterval(0, dictionary.length-1);
	return dictionary[index];
}