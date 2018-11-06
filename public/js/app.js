$(document).ready(function() {
    $.get("localhost:3300/api/products").done(function(data){
        console.log(data);
    })
});