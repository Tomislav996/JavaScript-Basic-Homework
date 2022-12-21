
userRows = parseInt(prompt("Enter the number of rows: "));
userColumns = parseInt(prompt("Enter the number of columns: "));


function createTable(userRows, userColumns) {

 for(let rows=0; rows < userRows;rows++) {
    let Row = document.getElementById('Table').insertRow(rows);

     for(let columns=0; columns < userColumns; columns++)  {

       let cells = Row.insertCell(columns);
       cells.innerHTML="Row-"+rows+" Column-"+columns; 
    }
  }
}


createTable(userRows, userColumns);