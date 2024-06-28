function addPair() {
    const keyInput = document.querySelector('#term-def pair input[placeholder="term"]');
    const valueInput = document.querySelector('#term-def pair input[placeholder="definition"]');

    const term = keyInput.value;
    const definition = valueInput.value;

    if(key && value) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        document.getElementById('term-def pair').appendChild(listItem);

        //to clear input fields
        keyInput.value = '';
        valueInput.value = '';
    }
}