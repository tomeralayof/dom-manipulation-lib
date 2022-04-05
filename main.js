 import query from "./src/query/query.js"
import classModule from "./src/class/class.js"
import createTable from "./src/elements_creation/table/createUsertable.js"
import tables from "./src/elements_creation/table/table.js";

const data = {
    id: "body",    
    tableRows: [
        ["Sr. No.","Name","Company","mountly salery","yearly salery","motivation"],
        ["1.","tomer","google",5000,5000*12,3],
        ["2.","avi","cnw",2000,2000*12,3],
        ["3.","shlomi","shok",3000,3000*12,3]
    ]
}

const frequencyTable = {
    id: "david",    
    tableRows: [
        ["num of group activity","num of children"],
        [0,22],
        [1,35],
        [2,35],
        [3,28],
        [4,30]
    ]
}

let dataToCalc = tables.createTable(data);

tables.createAverageTable(dataToCalc);

console.log('hi');



 tables.createFrequencyTable(frequencyTable);




/* export  {query,classModule}; */