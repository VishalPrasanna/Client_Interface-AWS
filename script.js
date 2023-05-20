

const product1 = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  };

function addToCurrent(Product){
    const current = document.getElementById("current_table");
    const addRow = current.insertRow();

    const arrayProduct = Object.entries(Product);

    arrayProduct.forEach(([key, value]) => {
        console.log(key, value);
        const cell = addRow.insertCell();
        cell.innerHTML = value;
    });
}

addToCurrent(product1);