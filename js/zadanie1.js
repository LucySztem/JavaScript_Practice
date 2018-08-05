/* Operation on the random number:
  a) checking if it's odd or even
  b) pow the number  */

  function getRandomNumber(){
    var randomNumber = Math.floor(Math.random() * 100);

    console.log("The number is " + randomNumber);
  }
  var randomTest = getRandomNumber();

    // odd or even

    if(randomTest % 2 === 0){
        console.log("The number is even");
    } else {
      console.log("The number is odd");
    }

    //getRandomNumber();
