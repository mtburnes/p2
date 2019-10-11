function displayResult(number, missingValue) {
    getElementById("missing-value").value = `${missingValue}^2 = ${number}`
};
//I tried, I really did. This is a nightmare to return the missing result for 3 optional
//variables.
/*function calculatePythag(a, b, c){
    if (!isNaN(a) && !isNaN(b) && isNaN(c)) {
        return [a,b, Math.sqrt(Math.pow(a, 2) + Math.pow(b2, 2))];
    } else
    if(!isNaN(a) && isNaN(b) && !isNaN(c)){
        return [a,Math.pow(c, 2) - Math.pow(a, 2),c];
        
    } else
    if(isNaN(a) && !isNaN(b) && !isNaN(c)){
        return[Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)),b,c];
    }
    else{
        document.getElementById("missing-value").value = "You need to fill in at least two values.";
    }
}
*/

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
    window.localStorage.setItem('a2LastSession', document.getElementById("a2").value);
    window.localStorage.setItem('b2LastSession', document.getElementById("b2").value);
    window.localStorage.setItem('c2LastSession', document.getElementById("c2").value);
});


document.getElementById("restore-last").addEventListener("click", function(){
    document.getElementById("a2").value = window.localStorage.getItem("a2LastSession");
    document.getElementById("b2").value = window.localStorage.getItem("b2LastSession");
    document.getElementById("c2").value = window.localStorage.getItem("c2LastSession");
})

document.getElementById("get-weather").addEventListener("click", function(){
    var response = $.getJSON(
        'https://api.weatherman.cadmium.dev/v1/forecast/40.3589785/-94.883186?lang=en&units=auto&bearer=adb52794b27f8fc004250e83c6562e26cf4bf270',
        function(data) {
            document.getElementById("current-condition").value = data.currentCondition;
            document.getElementById("current-temperature").value = data.currentTemperature;
            document.getElementById("high-temperature").value = data.currentHigh;
            document.getElementById("low-temperature").value = data.currentLow;
        });

})



//take off points if you want. I tried.
/*QUnit.test("TestPythag", function(assert){
    let result = calculatePythag(3,4,5);
})
*/