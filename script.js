// Listen for the status-select change event
document.getElementById('status-select').addEventListener('change', function() {
    // Get the selected value
    var selectedValue = this.value;

    // Get an array of all the status-circle elements
    var statusCircles = document.getElementsByClassName('status-circle');
    var statusTexts = document.getElementsByClassName('status-indicator');

    console.log(statusCircles);
    console.log(statusTexts);

    if (selectedValue==="1") {
        for (var i = 0; i < statusCircles.length; i++) {
            statusCircles[i].style.display = 'none';
            statusTexts[i].style.display = 'block';
        }
    } else {
        
        for (var i = 0; i < statusCircles.length; i++) {
            statusCircles[i].style.display = 'block';
            statusTexts[i].style.display = 'none';
        }
    }

})