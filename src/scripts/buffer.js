#!/bin/env node
/**
 * 
 **         _     ______  ______           ___    ___ 
 **        | |   (_____ \(____  \         / __)  / __)
 **   ____ | |  _ _____) )____)  )_   _ _| |__ _| |__ 
 **  |    \| |_/ )  __  /|  __  (| | | (_   __|_   __)
 **  | | | |  _ (| |  \ \| |__)  ) |_| | | |    | |   
 **  |_|_|_|_| \_)_|   |_|______/|____/  |_|    |_|   
 **                                                   
 *
 * 
 **    _     _   
 **   (c).-.(c)  
 **    / ._. \   
 **  __\( Y )/__  created by:
 ** (_.-/'-'\-._)    _         _ 
 **    ||   ||    _.|_  _ _   |_) _  _.._
 **  _.' `-' '._ (_|||_|/_/_\/|_)(/_(_||  
 ** (.-./`-'\.-.)           /        
 **  `-'     `-'  
 * @author aFuzzyBear
 * @see https://github.com/aFuzzyBear/
 */
 
import * as mkRreader from './mkRreader.js'


/**
 * @async templateBuffer
 * @param {String} path 
 * @param {String} fileName 
 * @param {Object} placeholders 
 * @returns a string from reading the file from a template, where the values have already been interpolated.
 */
async function templateBuffer(path,fileName,placeholders){
    return await mkRreader.readFromTemplate(path,fileName,placeholders)
}
console.log(await templateBuffer('src/templates/Components/JSDoc','mdx',{name:'demo'}));
/**
 * @async fileBuffer
 * @param {String} path 
 * @param {String} fileName 
 * @returns A String from reading the file directly from a locations.
 */
async function fileBuffer(path,fileName){
    return await mkRreader.readFromFile(path,fileName)
}

/**
 * @async objectBuffer
 * @param {Object} object 
 * @returns String from an object by taking an object and Stringifies it using JSON.stringify
 */
async function objectBuffer(object){
    return JSON.stringify(object,null,2)
}

export {templateBuffer,fileBuffer,objectBuffer}

