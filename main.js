//Function to create the default grid with JS
function defaultGrid(){
    let columns = 16;
    let rows = 16;

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

}


//On load of the page call a function to create the grid
window.onload = function(){
    defaultGrid();   
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
})

