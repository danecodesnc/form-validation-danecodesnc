//Notes/pseudocode from Brandon for part 1 of homework

//grab all HTML elements with the .field class
//grab the entire parking form
//grab event listener
//prevent default so it doesnt refresh
//do a for of loop to loop through all of the imput fields that have that .field class
//if else statement, looking for if the field the field is blank.
//if there's nothing in the field that we are looping through, add the input invalid class. 
//the else statement is saying, if there's anything in the field, add the input valid class. 

//Notes/psudocode from Brandon for part 2 of homework


console.log('Add validation!');
let parkingForm = document.querySelector("#parking-form")
let fields = document.querySelectorAll(".field")
parkingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
    console.log(fields);
    for (let field of fields) {
        if (field.value === "") {
            console.log("invalid")

            field.parentElement.classList.remove("input-valid")
            field.parentElement.classList.add("input-invalid")
        } else {

            field.parentElement.classList.remove("input-invalid")
            field.parentElement.classList.add("input-valid")

        }
    }


})