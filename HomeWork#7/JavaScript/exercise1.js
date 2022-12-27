

let inputs = document.getElementsByClassName("inputFields");

let button = document.getElementById("button");


button.addEventListener("click", function() {
    let Animal = {
        name: inputs[0].value,
        kind: inputs[1].value,
        speak: function(Humanname){
            alert(`${Animal.name} Says hi to ${Humanname} from the ${Animal.kind} family!`);
        }
    }
     Animal.speak(inputs[2].value);
     inputs[0].value = '';
     inputs[1].value = '';
     inputs[2].value = '';   

})





