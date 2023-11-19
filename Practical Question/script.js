function showRecipe() {
    //This will select the first drop down
    let select = document.getElementById("mySelect");
    //This will select the second drop down
    let select2 = document.getElementById("mySelect2");
    //This will select the third drop down
    let select3 = document.getElementById("mySelect3");
    //This will select the fourth drop down
    let select4 = document.getElementById("mySelect4");

    //Whatever the user selects that drop down value will be carried by this variables
    let selectedOption = select.options[select.selectedIndex];
    let selectedOption2 = select2.options[select2.selectedIndex];
    let selectedOption3 = select3.options[select3.selectedIndex];
    let selectedOption4 = select4.options[select4.selectedIndex];

    // The ALgoRithm
    if (selectedOption.value === "option1") {
        document.getElementById("recipeYouChosed").textContent = "Daal Tadka";
    } 
    if(selectedOption.value === "option1" && selectedOption2.value ==="option2"){
        document.getElementById("recipeYouChosed").textContent = "Turismo Daal";
    }
    if(selectedOption.value === "option1" && selectedOption2.value ==="option2" && selectedOption3.value ==="option3"){
        document.getElementById("recipeYouChosed").textContent = "Daal Khichdi";
    }
    if(selectedOption.value === "option1" && selectedOption2.value ==="option2" && selectedOption3.value ==="option3" && selectedOption4.value ==="option4"){
        document.getElementById("recipeYouChosed").textContent = "Daaal Pakwan";
    }
}

// Event listener for the select element
document.getElementById("mySelect").addEventListener("change", function() {
    showRecipe();
});