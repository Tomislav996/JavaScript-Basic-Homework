
$(document).ready(function(){
  let button = $("#button")
  button.click(function(){
    $.ajax({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/todos/`,
      success: function (data) {
        if(Array.isArray(data)){     
          printAll(data);
        } 
        else {
          console.log("Error, this item is not an array.");
        }
        
        
      },
      error: function(err) {
        console.log("This is an error message", err);
      }
    })
   

  })

  function printAll(data){
    for(let i = 0; i < data.length; i++)
    if(data[i].completed) {
      console.log(`The ID of this person is ${data[i].id} its Title is ${data[i].title} and its task is Completed`);
    }
    else{
      console.log(`The ID of this person is ${data[i].id} its Title is ${data[i].title} and its task is not Completed`);
    }
    

  }

})


/*
$(document).ready(function(){
  let button = $("#button");
  button.click(function(){
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then(response => {
      response.json()
        .then(data => {
          if(Array.isArray(data)){
            printAll(data);
          }
          else {
            console.log("Error, this item is not an array.");
          }
           
        })

      
    })

    .catch(error => {
      console.log("This is an error message", error);
    })
  })

  function printAll(data){
    for(let i = 0; i < data.length; i++)
    if(data[i].completed) {
      console.log(`The ID of this person is ${data[i].id} its Title is ${data[i].title} and its task is Completed`);
    }
    else{
      console.log(`The ID of this person is ${data[i].id} its Title is ${data[i].title} and its task is not Completed`);
    }
    

  }



})

*/



