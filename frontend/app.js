const termList = [];

function addPair(event) 
{
    event.preventDefault();
    const keyInput = document.getElementById('term');
    const valueInput = document.getElementById('definition');

    const term = keyInput.value;
    const definition = valueInput.value;

    if(term && definition && !termList.some(pair => pair[0] == term && pair[1] == definition)) {
        termList.push([term, definition]);

        keyInput.value = '';
        valueInput.value = '';

        updateList();
    }
}

function updateList()
{
    const listElements = document.getElementById('elementList');
    listElements.innerHTML = '';
    termList.forEach(tuple => {
        const item = document.createElement('li');
        item.textContent = `(${tuple[0]}, ${tuple[1]})`;
        listElements.appendChild(item);
    })
}

document.getElementById('addDefinition').addEventListener('click', addPair);