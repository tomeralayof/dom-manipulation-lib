import tables from "./table.js"

function createAverageTable(tableData,idToPass) {

    let lut = _initLut(tableData);
    _setUpLut(lut,tableData);

    let orgenizedData = _convertDataToTableForm(lut);

    const data = {
        id: idToPass || "defaultId",
        tableRows: [...orgenizedData]
    }

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