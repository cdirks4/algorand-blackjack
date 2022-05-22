'reach 0.1';
// user enters sets wager and starts game wager can be 0?
// the value of users cards and dealers cards come in
// user is asked to hit stand split double (//location//)
// dealers second card is hidden()
// dealer reveals card and hits until above 17(if bust player win)
// dealer pays out or keeps the wager (check for blackjack)
const Player = {};

export const main = Reach.App(() => {
	const D = Participant('Dealer', { ...Player });
	const B = Participant('Bob', {
		...Player,
		wager: UInt,
	});
	init();
});
