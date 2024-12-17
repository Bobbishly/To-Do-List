const inputedValues = document.getElementById("list");
const submitValues = document.getElementById("addText");
const unOrderedList = document.getElementById("unOrdered");

var addToTheList = function() {
    const newList = document.createElement("li");
    newList.appendChild(document.createTextNode(inputedValues.value));
    unOrderedList.appendChild(newList);
    inputedValues.value = "";
}       

submitValues.addEventListener('click', function() {
    // console.log("Hiiii");
    if (inputedValues.value.length > 0) {
        addToTheList();
    }
})

inputedValues.addEventListener('keydown', function(event) {
    if (inputedValues.value.length > 0 && event.key === "Enter") {
        addToTheList();
    }
})