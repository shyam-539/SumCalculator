function calculateSum() {
    const num = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (num >= 0 && num <= 1000000) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        resultElement.innerHTML = `Sum of numbers up to ${num} is <span class="animated-number">${sum}</span>`;
    } else {
        resultElement.innerText = "Invalid number";
    }
}
