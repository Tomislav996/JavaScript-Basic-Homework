$(document).ready(function(){
    let input = $("#input");
    let button = $("#button");
    let result = $("#result");
    let clearBtn = $(`#clear`);
    
    button.click(function(){
        let Name = input[0].value
        result.text(`Hello There ${Name}`).css("color", "blue");
        input[0].value = '';
        
    })
     clearBtn.click(function(){
        result.text(``);

    })
});
