

function favoriteThings(){
    console.log('Timothy Lundy')
    console.log("Skyfall")
    console.log('Bloc Party')
}

favoriteThings()

function whyImHere(){
    console.log("To get paid the big bucks hell yeah. Can I get a yehaw brother?")
}

whyImHere()

function favoritePlace(){
    console.log("Japan because of the history and anime")
}

favoritePlace()

console.log(Boolean(0));

let numbers = [1, 2, 3, 4];
let result = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(result);

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let sum = 0;
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  sum += i;
}
console.log(sum);


let x = 0;
do {
  console.log(i);
  i++;
} while (i < 3);