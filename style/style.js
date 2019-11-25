function dice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    document.getElementById("randomdice").innerHTML = randomNumber;

}


    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessSubmit1 = document.querySelector('.guessSubmit1');

    // const guessField = document.querySelector('.guessField');
    let guessCount = 1;
    let current_place = 1;
    var position1 = {"a":1};
    var position2 = {"a":1};
    var places;

    let resetButton;

    function checkGuess() {
      let userGuess = Number(player1.value);

        if(userGuess > "1") {
    if (position1.a > 25){
        places = position1.a - userGuess;
         console.log(places);
        position1.a = places;
        console.log(position1.a);
        document.getElementById("player1position").innerHTML = position1.a;
          lowOrHi.textContent = 'you been snake go to '+ position1.a;
          lastResult.style.backgroundColor = 'red'

        } else if (position1.a == 25) {
        lastResult.textContent = 'Congratulations! Player 1 Win!!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();


      }
          else if (position1.a == 14){
         places = 5;
         console.log(places);
        position1.a = places;
        console.log(position1.a);
        document.getElementById("player1position").innerHTML = position1.a;
          lowOrHi.textContent = 'you been snake go to '+ position1.a;
          lastResult.style.backgroundColor = 'red'


        } else if (position1.a == 22){
           places = 16;
         console.log(places);
        position1.a = places;
        console.log(position1.a);
        document.getElementById("player1position").innerHTML = position1.a;
          lowOrHi.textContent = 'you been snake go to '+ position1.a;
          lastResult.style.backgroundColor = 'red'


        }else if (position1.a == 8){
           places = 15;
         console.log(places);
        position1.a = places;
        console.log(position1.a);
        document.getElementById("player1position").innerHTML = position1.a;
          lowOrHi.textContent = 'you found ladder go to '+ position1.a;
          lastResult.style.backgroundColor = 'blue'


        } else if (position1.a == 19){
           places = 24;
         console.log(places);
        position1.a = places;
        console.log(position1.a);
        document.getElementById("player1position").innerHTML = position1.a;
          lowOrHi.textContent = 'you found ladder go to '+ position1.a;
          lastResult.style.backgroundColor = 'blue'


        } else {
           places = position1.a + userGuess;
         console.log(places);
        position1.a = places;
        console.log(position1.a);
        document.getElementById("player1position").innerHTML = position1.a;
          lowOrHi.textContent = 'Going up '+ position1.a;
          lastResult.style.backgroundColor = 'green'

       //  	 places = current_place - userGuess;
        // position1.push(places);
       //  	guesses.textContent = position;
       //    lowOrHi.textContent = 'You been snake back to box 5';
       }


      }
      guessCount++;
      player1.value = '';
      player1.focus();
    }
     guessSubmit.addEventListener('click', checkGuess);


     function checkGuess2() {
      let userGuess1 = Number(player2.value);
      // if (guessCount === 1) {
      //   guesses.textContent = 'Previous guesses: ';
      // }
      // guesses.textContent += userGuess + ' ';
console.log(userGuess1)


        if(userGuess1 > "1") {
    if (position2.a > 25){
        places = position2.a - userGuess1;
         console.log(places);
        position2.a = places;
        console.log(position2.a);
        document.getElementById("player2position").innerHTML = position2.a;
          lowOrHi.textContent = 'you been snake go to '+ position2.a;
          lastResult.style.backgroundColor = 'red'

        } else if (position2.a == 25) {
        lastResult.textContent = 'Congratulations! Player 2 Win!!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver2();


      }
          else if (position2.a == 14){
         places = 5;
         console.log(places);
        position2.a = places;
        console.log(position2.a);
        document.getElementById("player2position").innerHTML = position2.a;
          lowOrHi.textContent = 'you been snake go to '+ position2.a;
          lastResult.style.backgroundColor = 'red'


        } else if (position2.a == 22){
           places = 16;
         console.log(places);
        position2.a = places;
        console.log(position2.a);
        document.getElementById("player2position").innerHTML = position2.a;
          lowOrHi.textContent = 'you been snake go to '+ position2.a;
          lastResult.style.backgroundColor = 'red'


        } else if (position2.a == 8){
           places = 15;
         console.log(places);
        position2.a = places;
        console.log(position2.a);
        document.getElementById("player2position").innerHTML = position2.a;
          lowOrHi.textContent = 'you found ladder go to '+ position2.a;
          lastResult.style.backgroundColor = 'blue'


        } else if (position2.a == 19){
           places = 24;
         console.log(places);
        position2.a = places;
        console.log(position2.a);
        document.getElementById("player2position").innerHTML = position2.a;
          lowOrHi.textContent = 'you found ladder go to '+ position2.a;
          lastResult.style.backgroundColor = 'blue'


        } else {
           places = position2.a + userGuess1;
         console.log(places);
        position2.a = places;
        console.log(position2.a);
        document.getElementById("player2position").innerHTML = position2.a;
          lowOrHi.textContent = 'Going up '+ position2.a;
          lastResult.style.backgroundColor = 'green'
       }


      }
      guessCount++;
      player2.value = '';
      player2.focus();
    }
    guessSubmit1.addEventListener('click', checkGuess2);

    function setGameOver() {
      player1.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }
     function setGameOver2() {
      player2.disabled = true;
      guessSubmit1.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }
    function resetGame() {
      location.reload();
    }
