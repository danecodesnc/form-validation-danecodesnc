console.log('Add validation!');

let fields = document.querySelectorAll(".field")

let parkingForm = document.querySelector("#parking-form")
parkingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    for (let input of fields) {
        console.log(input);
        if (input.value) === "") {
        console.log("Nothing here!")
        input.parentElement.classList.add("input-invalid")
    } else {
        console.log("Stuff in there")
        input.parentElement.classList.add("input-valid")
    }
}
})





// const nameField = document.getElementById("name-field")
// nameField.addEventListener("submit", validInvalid)

// function validId() {
//     console.log("name field thing")
// }

// function removeInvalidClass(el) {
//     let nameField = document.getElementById("name-field");
//     nameField.classList.remove('input-invalid');}