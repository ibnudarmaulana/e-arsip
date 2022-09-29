$(document).ready(function(){

//event
$('#search').on('keyup', function(){

    $('#wadah').load('vendors/ajax/ajaxsk.php?search=' + $('#search').val());

});

});