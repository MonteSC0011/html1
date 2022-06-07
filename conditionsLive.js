console.log("Hello World");


let randomNumber = Math.random();

console.log(randomNumber); 

// if (randomNumber < 0.5) {

//     console.log("Hello Monte");
//     console.log(randomNumber);

// }

// if (randomNumber >= 0.5) {

//     console.log('Random Number is greater than 0.5');
//     console.log(randomNumber);

// }

//If Else Statement:

//

// const dayOfWeek = 'Monday';

// if (dayOfWeek === 'Monday') {

//     console.log('This is Monday');

// } else if (dayOfWeek === 'Thursday') {

//     console.log("This is Thursday");

// } else if (dayOfWeek ===  'Saturday') {

//     console.log("Hooray, today is Saturday");
// }


// const age = prompt('Enter An Age To Drive!');


// if (age < 5) {

//     console.log("You are less than 5! Cmon bro.");
// } else if (age < 10) {

//     console.log("Still too young!");

// } else if (age >= 16) {

//     console.log("You are able to drive!");
// }

const age = prompt('ENTER AN AGE');
// const age = 8;

if (age < 5) {
    console.log("You Type Pretty Fast - 5 ");
} else if (age < 10) {
    console.log("Output of the logic compared to CASE STATEMENTS");
} else if (age < 35) {
    console.log("Output of the logic Mr Adult.");
}
//ELSE -- ALL ALL CONDITIONS IN THE LOGIC HAVE FAILED
else {

    console.log("Last Resort If All Conditons Fail");
} 