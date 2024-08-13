/*
// Teste

function createChunks(n) {
    return Array.from({ length: n }).fill('chunk').join('-');
}

console.log(createChunks(6)); 
// Retornou corretamente
*/

document.getElementById('chunk-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const numberInput = document.getElementById('number-input').value;
    const number = parseFloat(numberInput);

    const resultString = createChunks(number);

    document.getElementById('p-resultado').textContent = resultString;
});

function createChunks(n) {
    return Array.from({ length: n }).fill('chunk').join('-');
}