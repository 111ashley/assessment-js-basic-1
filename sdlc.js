// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

var arr = [`Planning`, `Analysis of Requirements`, `Design`, `Implementation`, `Testing & Integration`, `Maintain`]
for (let i = 0; i<arr.length; i++){
    console.log(arr[i])
}


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = console.log("This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.")
const analysisOfRequirements = console.log("This is the second step, in which the functional requirements of the project of solution are considered. The needs of end users are also analyzed in this step.")
const design = console.log("This is the third step, in which detailed descriptions of neccessary features and operations that will meet functional requirements, are implemented.")
const implenmentation = console.log("This is the fourth step, in which the majority of the code for the program is written.")
const testingAndIntegration = console.log("This is the fifth step, in which systems integration and system testing are done. This is usually done by a Quality Assurance professional.")
const maintain = console.log("This is the last step, in which the system is improved upon while also maintaining functionality.")


