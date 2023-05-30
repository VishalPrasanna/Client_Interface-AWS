

const product1 = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  };


function addToCurrent(Product) {
    const current = document.getElementsByClassName("current_table")[0];
    const addRow = current.insertRow();

    let columnIndex = 0;
    for (const [key, value] of Object.entries(Product)) {
        console.log(key, value);
        const cell = addRow.insertCell(columnIndex);
        console.log(value);
        cell.innerHTML = value;
        columnIndex++;
    }
}


addToCurrent(product1);