'use strict'
import commonWarnings from "../common/warnings.js";

function renderByQuery (queryName,text) {
    
    commonWarnings.missSecondParam(text,"rendered");
    
    if(typeof queryName != 'string') {  
        throw "first parameter must be a string"
    }
    
    else if(queryName.indexOf(".") != 0) {
        throw new Error('point(.) must be at the beginning of the string of the first parameter');        
    }

    let content;

    try {
        content = document.querySelector(queryName);

      } catch (error) {
        throw error +" "+ "this error might be happend because you have entered an invalid name, please go to your html and check that out";
      }

    if (!content) {
        throw 'query selector returned null, it might be happend because you have tried to access with id instead of class';
    }

    content.textContent = text;
    return 0;
}

const query = {
    renderByQuery,
}

export default query;

