#!/bin/env node
'use strict'
/**
 *@module gorbals
 **   _______       ______  _           _       
 **  (_______)     (_____ \| |         | |      
 **   _   ___  ___  _____) ) |__  _____| |  ___ 
 **  | | (_  |/ _ \|  __  /|  _ \(____ | | /___)
 **  | |___) | |_| | |  \ \| |_) ) ___ | ||___ |
 **   \_____/ \___/|_|   |_|____/\_____|\_|___/ 
 **                                            
 * 
 * 
 * @description
 * A Named Export module file that contains the global functions and variables that are used in different places around the application. 
 * *      _     _     
 * *     (c).-.(c)    
 * *      / ._. \     
 * *    __\( Y )/__    created by:
 * *   (_.-/'-'\-._)      _         _ 
 * *      ||   ||      _.|_  _ _   |_) _  _.._
 * *    _.' `-' '._   (_|||_|/_/_\/|_)(/_(_||  
 * *   (.-./`-'\.-.)             /        
 * *    `-'     `-'    
 *
 * 
 * @author aFuzzyBear
 * @see https://github.com/aFuzzyBear/
 * 
 * 
 */

// Export Variables go here

 // Regex Patterns
 export const isYes = /^y(es)?$/gi
 export const isNo = /^n(o)?$/gi
 export const isWord =/([A-Z]|[a-z])\w+/gi



//  Export Functions go here
/**
 * toPascalCase
 * @param {String} input 
 * @returns A string that has been converted into Pascal Case for keeping with the React Naming convention required for naming Components. 
 * @see https://stackoverflow.com/a/53952925/13301381 
 * @author kalicki2K @https://stackoverflow.com/users/7768064/kalicki2k 
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
 * @exports doesExist
 * @param {any} variable - 
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
        console.error('Error checking variable\'s existence'+error);        
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

export function checkWord(string) {
    if(string.match(isWord)){
        return
    }else{
        throw new SyntaxError('CheckWord Failed: Input is not a word')
    }
    
}