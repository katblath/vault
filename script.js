// create three calculations to apply to three parts of a combination code
// combo is 10 40 39 so first calculation will be 5+5, second calculation will be 100-60, and last calculation will be 13*3
// put it in a dialog box, aka alert
// comment stuff where necessary

// below is alternate way to display the message without using alert
//let para = document.querySelector("p");
let message = "Here is the secret combo";
const one = 5 + 5;
const two = 100 - 60;
const three = 13 * 3;
alert(`${message}: ${one} - ${two} - ${three}`);
console.log(`${one} - ${two} - ${three}`);
// below is the second half of the way to display the message without using alert
//to use the alternates, comment in lines 5 and 14 and comment out line 10
//para.innerHTML = `${message}: ${one} - ${two} - ${three}`;
