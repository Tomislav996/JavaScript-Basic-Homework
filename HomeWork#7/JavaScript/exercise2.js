

let input = document.getElementsByClassName("inputField");

let button = document.getElementById("btn");


button.addEventListener("click", function(){

    let book = {
        title: input[0].value,
        author: input[1].value,
        readingStatus: input[2].value,
        
        status: function(){
            if(this.readingStatus === "yes" || this.readingStatus === "Yes")
             alert(`Already read ${this.title} by ${this.author}`);
             
             else {
                alert(` Still need to read ${this.title} `);
             }
        }
    
    
    }
    
       book.status();
       

})


