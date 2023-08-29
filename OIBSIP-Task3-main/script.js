document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unitSelect");
    const toCelsiusRadio = document.getElementById("toCelsius");
    const toFahrenheitRadio = document.getElementById("toFahrenheit");
    const convertBtn = document.getElementById("convertBtn");
    const resultText = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        
        if (isNaN(temperature)) {
            resultText.textContent = "Please enter a valid number.";
            return;
        }

        const selectedUnit = unitSelect.value;
        const conversionType = toCelsiusRadio.checked ? "celsius" : "fahrenheit";

        const convertedTemperature = convertTemperature(temperature, selectedUnit, conversionType);
        resultText.textContent = `Converted Temperature: ${convertedTemperature} ${conversionType === "celsius" ? "°C" : "°F"}`;
    });

    function convertTemperature(temperature, fromUnit, toUnit) {
        if (fromUnit === toUnit) {
            return temperature;
        }

        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            return (temperature * 9/5) + 32;
        }

        if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            return (temperature - 32) * 5/9;
        }
    }
});
