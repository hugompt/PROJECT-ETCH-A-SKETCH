//Function to create the default grid with JS
function newGrid(columns,rows){

    if(columns === undefined || rows === undefined){
        columns = 16;
        rows = 16;
    } 
    console.log(rows);
    console.log(columns);
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

//Function to prompt the user the grid size to draw
function gridSizePrompt(){
    const gridSize = Swal.fire({
    title: 'Please choose the number of squares per row for the new grid',
    icon: 'question',
    input: 'range',
    confirmButtonColor: 'green',
    inputAttributes: {
      min: 16,
      max: 20,
      step: 1
    },
    inputValue: 16
  })
  console.log($(gridSize));
  
}
//On load of the page call a function to create the grid
window.onload = function(){
    newGrid(20,20);   
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
        console.log("i was clicked");
        gridSizePrompt();
    };

    //
    // $(".mainCont").css({
    //     'width': ($(".first_div").width() + 'px')
    //   });
})

