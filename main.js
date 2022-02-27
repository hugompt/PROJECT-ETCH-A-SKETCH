//Function to create the default grid with JS
function newGrid(columns,rows){

    if(columns === undefined || rows === undefined){
        columns = 20;
        rows = 20;
    } 
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.id = "cellRow_" + i;
        row.className = "row";
        for (let j = 0; j < columns; j++) {
            let column = document.createElement('div');
            column.id = "cellColumn_" + j;
            column.className = "cell";
            row.appendChild(column);
        }              
        document.getElementById('mainGrid').appendChild(row);
    }
    switch (columns) {
        case "16":
            break;
        case "17":
        case "18":
        case "19":
            $('.bottomCont').css('margin-bottom', '0');
            break;
        case "20":
        case "21":
            $('.bottomCont').css('margin-bottom', '-2%');
            break;
        case "22":
        case "23":
        case "24":
        case "25":
            $('.bottomCont').css('margin-bottom', '-5%');
            break;
    }
}

//Function to prompt the user the grid size to draw
function gridSizePrompt(){
    const gridSize = Swal.fire({
        title: 'Choose a number of rows + columns for the new grid:',
        icon: 'question',
        input: 'range',
        confirmButtonColor: 'green',
        inputAttributes: {
            min: 16,
            max: 25,
            step: 1
        },
        inputValue: 20
    }).then(function (){
        const inputRange = Swal.getInput();

        let rowsTotal = inputRange.value;
        localStorage.setItem("numbRows", rowsTotal);

        let columnsTotal = inputRange.value;
        localStorage.setItem("numbColumns", columnsTotal);

        location.reload();
    });

  console.log($(gridSize));
  
}
//On load of the page call a function to create the grid
window.onload = function(){
    console.log(localStorage.getItem("numbRows"));
    console.log(localStorage.getItem("numbColumns"));
    newGrid(localStorage.getItem("numbRows"),localStorage.getItem("numbColumns"));   
}

//Check is page is ready to run code
$(document).ready(function(){
    //Create variable check if the user is holding down the mouse
    let mouseDown = false;
    $(document).on('mousedown', function() {
        mouseDown = true;
    });
    $(document).on('mouseup', function(){
        mouseDown = false;
    });

    //When the user clicks on a cell, change color to black
    $('.cell').on('mousedown', ( function (){
        $(this).css('background-color', 'black');
    }));

    //When a user hovers a cell with the mouse clicked,
    //change the color to black
    $('.cell').hover( function(){
        if(mouseDown){
            $(this).css('background-color', 'black');
        }
    });

    $('.eraser').on('mousedown', (function(){
        $('.cell').css('background-color', 'white');
    }));

    //Action if the user clicks the change grid size button
    document.getElementById("sizeGrid").onclick = function() {
        gridSizePrompt();
    };
})

