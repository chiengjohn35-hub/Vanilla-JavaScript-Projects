const text = document.getElementById('ageInput');
const changingtxt = document.getElementById('feedback');
const fruits = document.getElementById("demo2");

// function to change txt content
function changetxt(){
    changingtxt.innerHTML = "JavaScript is <em>Fun </em>!";
}


// function to determine vote eligibility based on age input
function sentGreetings(){
    let text = parseInt(document.getElementById("ageInput").value);
    if (text < 18) {
        alert("You are too young to vote!");
    } else if (text >= 18) {
        alert("you are eligible to vote! ");
    } else {
        alert("please voter age should be a number!");

    }
};



// function to display list of fruits and loops multiple times through an array
function showFruits(){
    let fruitslist = ["apple", "banana", "cassava", "mango", "orange"];
    
    for( let i=0; i< fruitslist.length; i++){
        fruits.innerHTML += "<li>" + fruitslist[i] + "</li>";
    }
}

