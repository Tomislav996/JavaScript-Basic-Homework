
$(document).ready(function(){
    let button = $("#button")
    button.click(function(){
      $.ajax({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/todos/`,
        success: function (data) {
          printAll(data);
          
        }
      })
  
    })
  
  
    function printAll(data){
      for(let i = 0; i < 200; i++)
      if(data[i].completed) {
        console.log(`The ID of this person is ${data[i].id} its Title is ${data[i].title} and its task is Completed`);
      }
      else{
        console.log(`The ID of this person is ${data[i].id} its Title is ${data[i].title} and its task is not Completed`);
      }
      
  
    }
  
  })
  