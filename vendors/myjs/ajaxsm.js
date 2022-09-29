$(document).ready(function(){
    $('#search').on('keyup', function(){
        $('#wadah').load('vendors/ajax/ajaxsm.php?search=' + $('#search').val() );
    });
});