// Exercise #1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(inputString, namesList) {
    for (const name of namesList) {
        if (inputString.includes(name)) {
            console.log("Matched " + name);
            return;
        }
    }

    console.log("No Matches");
}
// Call the method with parameters
findWords(dog_string, dog_names);



// Exercise #2

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}

replaceEvens(arr);

console.log(arr);
