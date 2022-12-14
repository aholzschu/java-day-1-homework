// *Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// `Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (dg_string, dg_names) => {
    for(let name of dog_names){
        if (dog_string.includes(name)){
            console.log(`Mached ${name}`)
        } 
        else {
            console.log('No Match')
        }
    }
}
console.log(findWords(dog_string, dog_names))

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


// students_thieves = ['Sean', 'Taps', 'Nick', 'Kevon']
// for (let i=0; i < students_thieves.length; i++){
//     console.log(students_thieves[i])
// }


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array){
    for(i = 0; i < array.length; i++){
        if (i % 2 == 0){
            console.log(array[i] = 'even index') 
        }
    }
    return(array)
}

console.log(replaceEvens(arr))


    

//codewars problem 1
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// I chose to do this one because it taught me how to use the ternary operator to test if a value is true or false. 

    function simpleMultiplication(number){
        return number * (number % 2 ? 9 : 8)
    }



//codewars problem 2
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
    const quarterOf = (month) => {
        if (month < 4){
          return 1
        }
        else if (month < 7){
          return 2
        }
        else if (month < 10){
          return 3
        }
        else{
          return 4
      }  
      }