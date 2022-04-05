'use strict'

function createTable (data) {  
    if (typeof data != 'object') {
        console.log('data should be object');
    }
    
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    const {id,tableRows} = data;
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    _createFirstRow(tableRows,thead);
    _createRest(tableRows,tbody);
    document.getElementById(id).appendChild(table);

    return data;
}
    
function _createFirstRow (tableRows,thead){ 
    let row = document.createElement("tr");
    const [firstRow] = tableRows;
    for(let data of firstRow) {
        let heading = document.createElement("th");
        heading.innerHTML = data;
        row.appendChild(heading);
    }
    thead.appendChild(row);
}

function _createRest(tableRows,tbody){
    for(let i = 1; i < tableRows.length; i++) {
        let newRow = document.createElement('tr');
        for(let row1 of tableRows[i]) {
            let row_2_data_1 = document.createElement('td');
            row_2_data_1.innerHTML = row1;
            newRow.appendChild(row_2_data_1);
        }
        tbody.appendChild(newRow);
    }
}

export default createTable;












/* function exportTableToExcel(tableID, filename = ''){
    let downloadLink;
    const dataType = 'application/vnd.ms-excel';
    let tableHTML = tableData.rest;

    filename = filename ? `${filename}.xls`:'excel_data.xls';

    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    downloadLink.download = filename;
    downloadLink.click();
}
 */


















/* function exportTableToExcel(tableID, filename = ''){
    let downloadLink;
    const dataType = 'application/vnd.ms-excel';
    let tableHTML = tableData.rest;

    filename = filename ? `${filename}.xls`:'excel_data.xls';

    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    downloadLink.download = filename;
    downloadLink.click();
}
 */