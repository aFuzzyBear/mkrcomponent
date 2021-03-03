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


 // Regex Patterns
export const isYes = /^y(es)?$/gi
export const isNo = /^n(o)?$/gi
export const isWord =/([A-Z]|[a-z])\w+/gi

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
        console.error('Error checking variable\' existence'+error);        
    }
}
