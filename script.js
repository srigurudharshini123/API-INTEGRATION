const factDisplay = document.getElementById('fact');
const btn = document.getElementById('getFactBtn');

btn.addEventListener('click', getCatFact);

async function getCatFact() {
    factDisplay.textContent = "Loading...";
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        factDisplay.textContent = data.fact;
    } catch (error) {
        factDisplay.textContent = "Failed to fetch data. Try again!";
        console.error(error);
    }
}
