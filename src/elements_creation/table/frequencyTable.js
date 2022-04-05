import tables from "./table.js";

function createFrequencyTable(data) {

    let {tableRows} = data;

    tableRows[0].push("frequency");

    addFrequency(tableRows);

    tables.createTable(data);
}

function addFrequency (tableRows) {
    let freq = 0;
    for(let i = 1; i < tableRows.length; i++){
        freq+=tableRows[i][1];
        tableRows[i].push(freq);
    }
}

export default createFrequencyTable;