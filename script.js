console.log('Add validation!');

//Notes/pseudocode from Brandon for part 1 of homework

//grab all HTML elements with the .field class
//grab the entire parking form
//grab event listener
//prevent default so it doesnt refresh
//do a for of loop to loop through all of the imput fields that have that .field class
//if else statement, looking for if the field the field is blank.
//if there's nothing in the field that we are looping through, add the input invalid class. 
//the else statement is saying, if there's anything in the field, add the input valid class. 


//when you are calling an id, you need a # sign next to the id you are calling
let parkingForm = document.querySelector("#parking-form")
    //when calling a class you can have multiple things in a class and ususally it is called by a .
let fields = document.querySelectorAll(".field")
parkingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e);
    console.log(fields);
    for (let field of fields) {

        if (field.value === "") {
            console.log("invalid")
            field.parentElement.classList.add("input-invalid")

        } else {

            field.parentElement.classList.add("input-valid")
        }
    }

})












// let parkingForm = document.querySelector("#parking-form")
// parkingForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target);
// });


// function nameValidate() {
//     let fields = document.querySelectorAll(".field")
//     for (let input of fields) {
//         console.log(input);
//         if (input.value === "") {
//             console.log("Nothing here!")
//             input.parentElement.classList.add("input-invalid")
//         } else {
//             console.log("Stuff in there")
//             input.parentElement.classList.add("input-valid")



//         }
//     }
// }
// nameValidate();











// let el = document.querySelector("form");

// el.addEventListener("submit", function(e) {
//     e.preventDefault(); // This prevents the form from actually submitting (normally we wouldn't do this)

//     let emailInput = document.querySelector("#email-input");
//     let emailAddress = emailInput.value;
//     let parentDiv = emailInput.parentNode;

//     if (emailAddress !== "") {
//         parentDiv.classList.remove("input-invalid");
//         parentDiv.classList.add("input-valid");
//     } else {
//         parentDiv.classList.remove("input-valid");
//         parentDiv.classList.add("input-invalid");
//     }
// });





// let formElement = document.querySelector("form");
// formElement.addEventListener("submit", function() {
//   // validate the form -> what steps do we need? Let's break it down:
//     // select a single input (get this working in the console and then paste a working line of code into your JS file)
//       // get the value of that input (same: get it working in the console first)
//         // is that value blank? (hmmmm...how can we tell if it is blank? Or empty? Try comparing with an empty string.)
//           // if yes, it's blank:
//             // mark as invalid
//             // what does mark invalid mean? -> It becomes red if invalid 
//             // what does that mean in code? -> Add 'input-invalid' class from Shoelace to that element
//             // HERE IS WHERE YOU CAN START TRYING IN THE CONSOLE
//             // get code working in the console and put it here
//             // or put it in a function! (see below for an example of how to do that -- you can then call that function from inside another function. See the calculator example.)
//           // if no, it's not blank:
//             // we can mark it as valid (see the steps above for how to go about this)

// });
// // here is an example function that you could write and then call somewhere else where you need to do this thing:
// function markAsInvalid(el) {
//   // add input-invalid class to el
//   // el.classList.add('input-invalid');
// };









// function nameValidate() {
//     const inputBoxes = document.querySelectorAll(“input”);
//     for (let inputBox of inputBoxes) {
//         parent = inputBox.parentElement;
//         // if (box.value.length = 0) {
//         //     return false;
//         if (inputBox.value.length > 0) {
//             if (!parent.classList.contains(“input-valid”)) {
//                 parent.classList.add(“input-valid”);
//             }
//         } else {
//             !parent.classList.contains(“input-invalid”);
//             parent.classList.add(“input-invalid”);
//         }
//     }
// }





// const nameField = document.getElementById("name-field")
// nameField.addEventListener("submit", validInvalid)

// function validId() {
//     console.log("name field thing")
// }

// function removeInvalidClass(el) {
//     let nameField = document.getElementById("name-field");
//     nameField.classList.remove('input-invalid');}