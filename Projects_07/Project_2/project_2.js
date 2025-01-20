const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const Height = parseFloat(document.querySelector('#Height').value);
    const Weight = parseFloat(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');

    if (isNaN(Height) || Height <= 0) {
        results.innerHTML = `Please give a valid height.`;
    } else if (isNaN(Weight) || Weight <= 0) {
        results.innerHTML = `Please give a valid weight.`;
    } else {
        const bmi = (Weight / (Height * Height)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
        results.style.color = 'black';
    }
});
