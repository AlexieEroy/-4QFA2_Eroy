function myFunction(num1, num2){
    //declaration of the variables uding getElementById.value method
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var table_html = document.getElementById("table");
    var x, y;

    //These if conditions will be checking if the user entered numbers 2-10
    if ( isNaN(num1) || num1<2 || num1>10){
        alert("Please enter numbers from 2 to 10.");
    }
    else if ( isNaN(num2) || num2<2 || num2>10){
        alert("Please enter numbers from 2 to 10.");
    }
    
    //If the numbers entered are 2-10, it will execute the following
    else {
        //this will put <table> the variable "table" so it'll result to an html table
        //the border of the table is set to 1px
        var table="<table border='1px'>";

        //the firt for loop will be for the number of rows (x variable)
        for (x=1; x<=num1; x++) {
            //the table variable here will be <tr> or a table row
            //<tr> opens the table row
            table+="<tr>";

            //the second for loop is for the columns (y variable)
            for (y = 1; y<=num2; y++) {
                //the table variable here will have <td> or table data
                //<td> is to put a data (in this case, x*y) to a table cell
                //the </td> marks the end of the table data 
                table += "<td>"+(x*y)+"</td>";
            }
            //</tr> closes the table row
            //when the loop starts all over again, the table datas will be put in a new table row
            table+="</tr>";
        }
    //</table> marks the end of the table or closes the table
    table+="</table>"; 
    }

    //since the variable "table" holds all the numbers, we will be using table_html.InnerHTML to display the final result
    table_html.innerHTML = table
    
    return false;
}
