import tables from "./table.js";

function createFrequencyTable(data) {
    let {tableRows} = data;
    let lut = _initLut(tableRows);

    console.log(lut);
}

function _initLut (tableData) {
    let orgenizedData = {};
    for(let i = 0; i < tableData[0].length; i++){
        if(typeof tableData[1][i] === 'number') {
            orgenizedData[tableData[0][i]] = [];
        }
    }

    return orgenizedData;
}


export default createFrequencyTable;