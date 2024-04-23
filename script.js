function myFunction(num1, num2){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var x, y;

    if ( isNaN(num1) || num1 < 2 || num1 > 10){
        alert("Please enter numbers from 2 to 10.");
    }
    else if ( isNaN(num2) || num2 < 2 || num2 > 10){
        alert("Please enter numbers from 2 to 10.");
    }
    
    else {
       let mult_table = [];

     for(x=1; x<=num1; x++){
        let row = [];
        for(y=1; y<=num2; y++){
            row.push(x*y);
        }
        mult_table.push(row);
     }
    
     var output = " ";

     for(let row of mult_table){
        output += row.join('\t') + '<br>';
     }

    document.getElementById("output").innerHTML = output; 
    
    }
    
    return false;
}
