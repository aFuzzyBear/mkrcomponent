#!/usr/bin/env node
'use strict'
/**
 * @module mkREngine
 * @description mkR Template Engine.
 * This was required by part of the mkRComponent program because of the way the data from a file is written by the Node File System, it only accepts completed strings. Which made the idea of using ES5 Template literals, to interpolate values parsed when it was writing to the file, unusable. This could only of came about from having a mechanism to parse static files that would then have the ${placeholder}'s within the template swapped with the values we wanted at runtime, before the file was written to disk. 
 * I am extremely grateful to Muesha for presenting this solution. After his very helpful explanation of the problem and his simplistic solution was very insightful. 
 * @see https://stackoverflow.com/a/52818076/13301381
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * 
 */

 /**
 * @exports  mkREngine
 * @param {string} templateString 
 * @param {object} templateVars 
 * Takes a template with object placeholders embedded within, and outputs
 * a transpiled string where the placeholders are filled with their respective 
 * attributes.
 * @author muesha
 * @see https://stackoverflow.com/a/52818076/13301381
 * 
 */
export default function mkREngine(templateString, templateVars){
    let func = new Function(...Object.keys(templateVars),  "return `"+templateString +"`;")
    return func(...Object.values(templateVars));
}

