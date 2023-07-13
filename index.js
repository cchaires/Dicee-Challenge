
function rollDice(diceId) {
    // Generate a random number between 1 and 6
    const diceNumber = Math.floor(Math.random() * 6) + 1;
  
    // Update the dice image source based on the dice number
    $('#' + diceId).attr('src', 'images/dice' + diceNumber + '.png');
    return diceNumber;
  }
// Update the dice image source clicking on the dice.
// $('#Dice1').click(function() {
//    rollDice('Dice1');
//
// $('#Dice2').click(function() {
//    rollDice('Dice2');

var player1 = rollDice('Dice1');
var player2 = rollDice('Dice2');  

// If player 1 wins
if (player1 > player2) { 
    $('#title').html("🏁🎉 Player 1 Wins!");
} else if (player1 < player2) {
    $('#title').html("Player 2 Wins! 🏁🎉");
} else {
    $('#title').html("⛔ It's a draw! ⛔");
}