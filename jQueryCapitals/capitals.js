function initializeTable(){

    //Attach event listeners to Create
    $('#createLink').click(addCountry);
    createCountry('Bulgaria','Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();
    //Add default entiries -> create table row & append to table
    //Adjust links  
    function fixLinks(){
        $('tr a').css('display', '');
        $('tr:last-child a:contains(Down)').css('display','none');
        $('tr:nth-child(3) a:contains(Up)').css('display','none');
    }

    //Read input and call create row
    function addCountry(){
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        createCountry(country, capital);
        fixLinks();
    }

    //create table row
    function createCountry(country, capital){
        let row = $('<tr>')
            .append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        
        row.css('display', 'none');
        row.appendTo($('#countriesTable'));
        row.fadeIn();

    }
    //Move row up
    function moveUp(){
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertBefore(currentRow.prev());
            currentRow.fadeIn();
            fixLinks();
        });
    }
    //Move row down
    function moveDown(){
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertAfter(currentRow.next());
            currentRow.fadeIn();
            fixLinks();
        });
        
    }
    //Delete row
    function deleteRow(){
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.remove();
            fixLinks();
        });
        
        
    }  

} 