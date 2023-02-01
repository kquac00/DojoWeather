function displayMessage( element ){
    alert( "Loading weather report...");
}
function removeCookie( element ) {
    element.parentElement.remove();
}
function swapTemperature( element ) {

    var allDegreeSpans = document.querySelectorAll( ".degree");

    for( var i = 0; i < allDegreeSpans.length; i++ ){
        var currentNum = Number( allDegreeSpans[i].innerText);
        var newValue;

        if( element.value === "C" ){
            newValue = ( currentNum -32 ) * 5 / 9;

        }
        else{
            newValue = ( currentNum * 9/5) + 32;
        }
        allDegreeSpans[i].innerText = Math.round( newValue );
    }
}
