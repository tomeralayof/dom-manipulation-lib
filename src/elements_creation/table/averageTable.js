import tables from "./table.js"

function createAverageTable(...tableData) {

    let {tableRows} = tableData[0];
    
    let lut = _initLut(tableRows);

    _setUpLut(lut,tableRows);
    
    tableRows = _convertDataToTableForm(lut);
    
    const data = {
        id: tableData[1] || tableData[0].id,
        tableRows,
    }

    //add average by priority...
    
    tables.createTable(data);
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

function _convertDataToTableForm (lut) {
    let keyValPair = Object.entries(lut);
    let finalObj = {};
    for(let [name,val] of keyValPair ) {
        finalObj[`${name} average`] = _calcAverage(val);
    }

    return [Object.keys(finalObj), Object.values(finalObj)];
}

function _setUpLut (lut,tableData) {
    for (let i  = 0; i < tableData.length; i++) {      
        for (let j = 0; j < tableData[0].length; j++) {
            if(typeof tableData[i][j] === 'number') {
                lut[tableData[0][j]].push(tableData[i][j]);
            }
        }
    }
}

function _calcAverage(arr) {
    let sum = 0;
    arr.forEach(element => sum += element);
    return Math.floor(sum / arr.length);
}

export default createAverageTable