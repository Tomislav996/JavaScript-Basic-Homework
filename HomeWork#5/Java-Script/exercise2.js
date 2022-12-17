let Array1 = [1,6,1,8,6,5,6,5];
let Array2 = [7,4,7,1,6,3,7,1];
let Array3 = [4,3,9,4,7,4,9,8,];

function FindNumber(array, number) {
    if(typeof(number) !== ("number")){
        console.log("invalid input")
        return;
    }
    let counter = 0;

    for(iteration of array) {
        if(iteration === number) {
            counter++;
        }

    } console.log(`The number ${number} was found ${counter} time/s in  ${array}`);

}

FindNumber(Array1, 1);
FindNumber(Array2, 7);
FindNumber(Array3, "Text");
