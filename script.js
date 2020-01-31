//Notes/pseudocode from Brandon for part 1 of homework

//grab all HTML elements with the .field class
//grab the entire parking form
//grab event listener
//prevent default so it doesnt refresh
//do a for of loop to loop through all of the imput fields that have that .field class
//if else statement, looking for if the field the field is blank.
//if there's nothing in the field that we are looping through, add the input invalid class. 
//the else statement is saying, if there's anything in the field, add the input valid class. 




console.log('Add validation!');
let parkingForm = document.querySelector("#parking-form")
let inputs = document.querySelectorAll(".input")
parkingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
    console.log(inputs);
    for (let input of inputs) {
        let inputField = input.closest(".input-field")
        if (input.value === "") {
            console.log("invalid")

            inputField.classList.remove("input-valid")
            inputField.classList.add("input-invalid")
            inputField.classList.add("required")
        } else {

            inputField.classList.remove("input-invalid")
            inputField.classList.add("input-valid")
            inputField.classList.remove("required")

        }
    }


})