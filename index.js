// Import stylesheets
import './style.css';

let array = [1, 0, 2, 0, 0, 3];
// move zeros to end of the array
// output should be [1,2,3,0,0,0]

function arrayManipulations(){
  var temp = null, j = 0;
  for(var i=0; i<array.length; i++){
    if(array[i] !== 0){
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
      j++;
    }
  }
}

arrayManipulations();

console.log(array);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Array Manipulations</h1>`;