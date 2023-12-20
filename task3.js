function convertTemperature() {
    let temp = document.getElementById("tempInput").value;
    let type = document.getElementById("tempType").value;
    let result = 0;

    if (type === "Celsius") {
        result = (temp * 9/5) + 32; // Convert to Fahrenheit
        document.getElementById("result").innerHTML = result.toFixed(2) + " °F";
    } else if (type === "Fahrenheit") {
        result = (temp - 32) * 5/9; // Convert to Celsius
        document.getElementById("result").innerHTML = result.toFixed(2) + " °C";
    } else { // Kelvin
        result = parseFloat(temp) + 273.15; // Convert Celsius to Kelvin
        document.getElementById("result").innerHTML = result.toFixed(2) + " K";
    }
}
