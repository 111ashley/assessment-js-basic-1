//CODE HERE
let passwordString = 'ilovesummer1'

let passwordArr = passwordString.split('')

let count = 0

if(passwordArr.length >= 10){
    count++
}


for(let i=0; i<passwordArr.length;i++){
    if (passwordArr[i].match(/[a-z]/i)){
        console.log(passwordArr[i])
        count++
        i = passwordArr.length
    }}
for(let i=0; i<passwordArr.length;i++){
        if (passwordArr[i].match(/[0-9]/i)){
            console.log(passwordArr[i])
            count++
            i = passwordArr.length
        }
}

if (count == 3)
{
    console.log("This is a good password")
} else {console.log("Try a new password")}

// // //Create a variable called password and set it’s value to a string of your choice.

// // Write a conditional statement that checks if the password meets the following constraints:

// // At least 10 characters long

// // Contains at least one letter and one number

// // If the password meets the constraint, console log a success message.

// // If the password fails the constraint, console log a failure message.

// // Test out your conditional by changing the value of your password variable and running your file!

// // Additional Checks
// // There are many other constraints you might want to check for the password.

// // Add more constraints and checks to your program. You can read more about

// // String methods in Javascript here.

// // If you want to loop over your string you have to convert it into an array using the split method.Find more information here

// // Add at least 2 other checks and write a comment in your code listing them.

// // Here are some ideas, feel free to use these or come up with your own.

// // Check for presence of uppercase, lowercase, special characters, etc.

// // Check for maximum length (i.e. no more than 20 characters)

// // Make sure there aren’t spaces

// // Check for forbidden words (“password”, “letmein”)

// // Going Even Further
// // Add some ASCII Art to the output of your program!

// // In order to use ASCII art in your output, you’ll need to use create a multi-line string. More info here .

// // Be sure to push your code to Github for this assignment!
