function missSecondParam (hastext,...message){
    if(!hastext) {
        console.warn(`second parameter has to contain a value if you want it to be ${message}`);
    }
}

let commonWarnings = {
    missSecondParam
}

export default commonWarnings;