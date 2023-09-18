const tableDivs = document.querySelectorAll('.table');

tableDivs.forEach((tableDiv) => {

    const tdElements = tableDiv.querySelectorAll('td');
    
    tdElements.forEach((td, index) => {
        if (index % 2 !== 0) {
            td.classList.add('selected');
        }
    });
});