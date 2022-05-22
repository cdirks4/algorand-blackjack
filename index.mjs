import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(1000);
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 11];
const suits = ['Diamond', 'Heart', 'Club', 'Spade'];
const deck = new Map();
let int = 0;

values.forEach((value) => {
	suits.forEach((suit) => {
		deck.set(int, [suit, value]);
		int++;
	});
});
// console.log(Object.fromEntries(deck));
console.log(`Creating test account for Dealer`);
const accD = await stdlib.newTestAccount(startingBalance);
const accB = await stdlib.newTestAccount(startingBalance);
const ctcB = accB.contract(backend);
const ctcD = accD.contract(backend, ctcB.getInfo());
console.log(`Having creator create testing `);
const Player = (who) => ({});

await Promise.all([
	ctcD.p.Dealer({
		...Player('Bob'),
	}),
	ctcB.p.Bob({
		...Player('Bob'),
	}),
]);
