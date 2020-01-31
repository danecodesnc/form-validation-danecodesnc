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
//when you are calling an id, you need a # sign next to the id you are calling
let parkingForm = document.querySelector("#parking-form")
    //when calling a class you can have multiple things in a class and ususally it is called by a .
let fields = document.querySelectorAll(".field")
    //you type "submit" for a form and for a button you would put "click". 
    //You then want to create a function for the event that is about to occur when the submit button is clicked. 
    //The function has no name and it doesn't matter because it's used just the one time when you click the submit button.
parkingForm.addEvsentListener("submit", function(event) {
    //We have just created a function that will stop the page from constantly refreshing over and over again. 
    //The parenthesis are empty because it does not take an arguement officially, so they just stay blank.
    event.preventDefault();
    //Now we will log the event on the console.
    console.log(event);
    //Now we will log the let fields statement on the console. Let form is a declaration of a variable.
    console.log(fields);
    //This is a for statment that will begin an if else statement giving this click event conditions of validity depending on if theres text or no text on the page. 
    //This is offically considered a for loop. 
    for (let field of fields) {
        if (field.value === "") {
            console.log("invalid")
            field.parentElement.classList.remove("input-valid")
        }
        field.parentElement.classList.add("input-invalid")

    } else {
        field.parentElement.classList.remove("input-invalid")
        field.parentElement.classList.add("input-valid")

    }
}


})