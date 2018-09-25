var input = (process.argv.slice(2));

var diceroll = function(input){
  if(input.length != 1){
    console.log("wrong number of arguments, please enter a number of times you would like to roll the dice!");
  } else if(Number.isNaN(Number(input))){
    console.log("argument is not a number, please enter the NUMBER of times you would like to roll the dice");
  } else{
    var numbersRolled = "Rolled " + input + " dice: ";
    for(var i = 0; i < Number(input); i++){
      if(i == Number(input) - 1){
        numbersRolled += (Math.floor(Math.random() * (7 - 1)) + 1);
      } else {
      numbersRolled += (Math.floor(Math.random() * (7 - 1)) + 1) + ", ";
      }
    }
  }
  return numbersRolled;
}

console.log(diceroll(input));

