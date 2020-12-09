// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");


// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)

var cont = 'X';


// Create a function that will check the square marker
function changeMarker(){
    /*if(this.textContent === ''){
      this.textContent = 'X';

      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }*/
    if (cont == 'X') {
      this.textContent = cont;
      cont = 'O';
    }
    else {
      this.textContent = cont;
      cont = 'X';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}