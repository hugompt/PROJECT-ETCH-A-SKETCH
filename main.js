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



window.onload = function(){
    defaultGrid();

    // $(function() {
    //     $('.cell').hover( function(){
    //        $(this).css('background-color', 'black');
    //     },
    //     function(){
    //        $(this).css('background-color', 'white');
    //     });
    //  });

     let timeoutId = 0;
     $('.cell').on('mousedown', function() {
        $(this).css('background-color', 'black');
    });
     
}

