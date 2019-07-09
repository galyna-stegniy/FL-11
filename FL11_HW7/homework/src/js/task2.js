if (confirm('Do you want to play a game?')) {
  let range = 8;
  let attempts = 3;
  let prize = 100;
  let div = 2;
  let number = parseInt(Math.random() * range);
  for (let i = attempts; i > +0; i--) {
    let playerNumber = parseInt(
      prompt(
        'Choose a roulette pocket number from 0 to ' +
          range +
          '\nAttempts left: ' +
          i +
          '\nPossible prize: ' +
          prize +
          '$'
      )
    );
    if (playerNumber !== number) {
      prize = prize / div;
    } else {
      alert('you guess');
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
