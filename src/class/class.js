import commonWarnings from "../common/warnings.js"

const removeClass = (className,nameToRemove) => {
    
    commonWarnings.missSecondParam(nameToRemove,"removed");

    if(typeof nameToRemove != 'string' || nameToRemove.indexOf(' ') >= 0) {
        throw "the class you want to remove is nither a string nor contain spaces";
    }

    const class1 = getClass(className);

    _trowErrorOfNull(class1);

    class1.classList.remove(nameToRemove);
   
    return 0;
}

const addClass = (className,nameToRemove) => {

    commonWarnings.missSecondParam(nameToRemove,"added");

    const class1 = getClass(className);
    _trowErrorOfNull(class1);

    class1.classList.add(nameToRemove);

    return 0;
}

const getClass = (className) => {
    return document.getElementsByClassName(className)[0];
}

const _trowErrorOfNull = (className) => {
    if (!className) {
        throw "your class name is undefined, or you decleared something else like id by mistake, check the class name you have passed, it must be exactly the same as the class you were writing in the html"
    }
}

let classModule = {
    removeClass,
    addClass
}

export default classModule;