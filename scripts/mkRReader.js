#!/usr/bin/env node
'use strict'
/**
 * @module mkRreader.js
 * @description This module provides the read file utility functions that was need in parts of the build. 
 */ 
 
/**
 * @module 'fs/promises 
 * @see https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
*/
const {readFile : asyncReadFile}= await import('fs/promises')

const {default : mkREngine} = await import('./mkREngine.js')
const { cleanPath } = await import ('./gorbals.js')
const {display_error}= await import ('./console.js')

/**
 * @async 
 * @exports ReadFromTemplate
 * @param {String} path Path of the file to be read
 * @param {String} fileName - Name of the file to be read 
 * @param {Object} placeholders Object containing the values for the template Engine to interpolate over
 * @returns a String that has been interpolated with its placeholder values from a template file.
 */
 export async function readFromTemplate(path,fileName,placeholders){
    try{
        let directory = cleanPath(path)
        let contents = await asyncReadFile(`${directory}/${fileName}.template.txt`,{encoding:'utf8'})
        let filled = await mkREngine(contents,placeholders)
        return filled
    }catch(error){
        display_error('Error Reading from the Template: '+error);
    }
}

/**
 * @async 
 * @export readFromFile
 * @param {String} path - Path of the file to be read
 * @param {String} filename - The complete filename including file extension
 * @returns Data String of the contents from that file
 */
export async function readFromFile(path,filename){
    try {
        let directory = cleanPath(path)
        let contents =  await asyncReadFile(`${directory}/${filename}`,{encoding:'utf-8'})
        return contents
    } catch (error) {
        display_error('Error Reading from File: '+error);
    }
}

