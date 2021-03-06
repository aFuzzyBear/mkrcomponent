#!/usr/bin/env node
'use strict'

/**
 * @module gorbals
 * @description
 * A Named Export module file that contains the global functions and variables that are used in different places around the application. 
 * 
 */

//  Imports
const {display_error} = await import('./console.js')

 // Regex Patterns
 export const isYes = /^y(es)?$/gi
 export const isNo = /^n(o)?$/gi
 export const isWord =/([A-Z]|[a-z])\w+/gi

//String Validation & Sanitisation


export function inputValidation(input){
    let str = input
    if(str.match(isWord)){
        return toPascalCase(checkWord(input))
    }
    else {
        display_error('Syntax Error: Input is not a word');
    }
}

/**
 * @exports toPascalCase
 * @param {String} input 
 * @returns A string that has been converted into Pascal Case for keeping with the React Naming convention required for naming Components. 
 * @see https://stackoverflow.com/a/53952925/13301381 
 * @author kalicki2K 
 */

export function toPascalCase(input){
    return `${input}`
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w+)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, 'g'), '')
      .replace(new RegExp(/\w/), s => s.toUpperCase());
}

/**
 * @exports checkWord
 * @param {String} phrase - Takes a phrase and checks to see if it is a word, 
 * @returns a String of the Phrase if it is a word
 * @throws {SyntaxError} if the input is not recognised as a word
 */
export function checkWord(phrase) {
    if(phrase.match(isWord)){
        return phrase
    }else{
        throw new SyntaxError('CheckWord Failed: Input is not a word' + phrase )
    }
    
}
/**
 * @exports cleanPath
 * @param {String} path 
 * @description Takes the path for directories and does a layer of sanitation
 */
 export function cleanPath(path){
    let directory = checkWord(path)
        if (directory.endsWith('/'))  directory.slice(0,directory.length-1)
    return directory
}
/**
 * @exports doesExist
 * @param {any} variable 
 * @description Takes in a variable to see if the property exists, meaning it is neither: undefined, null or even an empty string. As it is, if it returns any of the aforementioned it would return a Boolean value of False, else if the variable passed has some value or anything, it would pass a True Boolean
 * 
 */
export function doesExist(variable){
    try {
        switch (variable) {
            case undefined:
             case null:
              case '':
                  return false
            default:
                return true
        }
    } catch (error) {
        display_error('Error checking variable\'s existence'+error);        
    }
}

/**
 * @async 
 * @exports extrapolate
 * @param {Object} settings 
 * @returns Takes the User Settings from the configuration file and extrapolates the values so they can be exported as a internal configuration file, 
 */
export async function extrapolate(settings){
    let {default:mkRConfig} = await import('./mkRConfig.js')
    let setup = new mkRConfig()
    setup.interface(settings)
    return setup.exportInternals()

}
/**
 * @async
 * @exports createComponent 
 * @param {Object} obj - Contains a collection of information creating the  
 * @param {String} template - Name of the template file to be read
 * @param {String} FileExt - Name of the File extension to be saved as
 * @param {String} FileName? - Optional File name 
 * @returns Creates a component from the information passed into it. 
 */
export async function createComponent(obj,template,FileExt,FileName=''){
    const {writeComponentToFile} = await import('./mkRWriter.js')
    const {templateBuffer} = await import('./mkRBuffer.js')
    let{path_dir,path_temp,placeholder,placeholder:{name}} = obj
    return await writeComponentToFile(path_dir,FileName || name,FileExt
        , await templateBuffer(path_temp,template,placeholder))
}

/**
 * @exports checkConfig
 * @returns Boolean - Checks if the User Config file exists
 */
import fs  from "fs";
export function checkConfig(){
     return fs.existsSync('mkR.config.js') ? true : false
}

/**
 * @async
 * @exports getInternals
 * @returns Internal configuartion object that informs which component files are to be made
 */
export async function getInternals(){
    const {default: config} = await import('../mkR.config.js')
    let  internals = await extrapolate(config)
    return internals
}