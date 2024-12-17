const inputedValues = document.getElementById("list");
const submitValues = document.getElementById("addText");
const unOrderedList = document.getElementById("unOrdered");

submitValues.addEventListener('click', function() {
    // console.log("Hiiii");
    if (inputedValues.value.length > 0) {
        const newList = document.createElement("li");
        newList.appendChild(document.createTextNode(inputedValues.value));
        unOrderedList.appendChild(newList);
        inputedValues.value = "";
    }
})