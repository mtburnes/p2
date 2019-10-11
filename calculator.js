function displayResult(number, missingValue) {
    getElementById("missing-value").value = `${missingValue}^2 = ${number}`
};

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("a2").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("c2").value = "";
})

document.getElementById("solve-button").addEventListener("click", function () {
    var a2 = parseInt(a2 = document.getElementById("a2").value);
    var b2 = parseInt(document.getElementById("b2").value);
    var c2 = parseInt(document.getElementById("c2").value);
    document.getElementById("missing-value").value = "";
    //begin field testing and formula calculations
    if (!isNaN(a2) && !isNaN(b2) && isNaN(c2)) {
        document.getElementById("c2").value = Math.sqrt(Math.pow(a2, 2) + Math.pow(b2, 2));
    } else
    if(!isNaN(a2) && isNaN(b2) && !isNaN(c2)){
        document.getElementById("b2").value = Math.sqrt(Math.pow(c2, 2) - Math.pow(a2, 2));
    } else
    if(isNaN(a2) && !isNaN(b2) && !isNaN(c2)){
        document.getElementById("a2").value = Math.sqrt(Math.pow(c2, 2) - Math.pow(b2, 2));
    }
    else{
        document.getElementById("missing-value").value = "You need to fill in at least two values.";
    }
});

document.getElementById("get-weather").addEventListener("click", function(){
    var response = $.getJSON('https://api.weatherman.cadmium.dev/v1/forecast/40.3589785/-94.883186?lang=en&units=auto&bearer=adb52794b27f8fc004250e83c6562e26cf4bf270');
    document.getElementById("current-condition").value = response.responseJSON.currentCondition;
    document.getElementById("current-temperature").value = response.responseJSON.currentTemperature;
    document.getElementById("high-temperature").value = response.responseJSON.currentHigh;
    document.getElementById("low-temperature").value = response.responseJSON.currentLow;
})
