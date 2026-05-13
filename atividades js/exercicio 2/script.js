const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");


celsius.addEventListener("input", () => {

    let c = parseFloat(celsius.value);

    if (isNaN(c)) {
        fahrenheit.value = "";
        return;
    }

    let f = (c * 9/5) + 32;

    fahrenheit.value = f.toFixed(2);
});

fahrenheit.addEventListener("input", () => {

    let f = parseFloat(fahrenheit.value);

    if (isNaN(f)) {
        celsius.value = "";
        return;
    }

    let c = (f - 32) * 5/9;

    celsius.value = c.toFixed(2);
});