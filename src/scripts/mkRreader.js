#!/bin/env node
'use strict'
/**
 * 
 * 
 **         _     ______  ______                  _             
 **        | |   (_____ \(_____ \                | |            
 **   ____ | |  _ _____) )_____) )_____ _____  __| |_____  ____ 
 **  |    \| |_/ )  __  /|  __  /| ___ (____ |/ _  | ___ |/ ___)
 **  | | | |  _ (| |  \ \| |  \ \| ____/ ___ ( (_| | ____| |    
 **  |_|_|_|_| \_)_|   |_|_|   |_|_____)_____|\____|_____)_|    
 **                                                             
 * 
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
 
/**
 * @module 'fs/promises 
 * @see https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
*/
import {readFile as asyncReadFile} from 'fs/promises'
import mkREngine from './mkRengine.js'
import { cleanPath } from './gorbals.js'


/**
 * @async ReadFromTemplate
 * @param {String} path Path of the file to be read
 * @param {String} fileName - Name of the file to be read 
 * @param {Object} placeholders Object containing the values for the template Engine to interpolate over
 * @returns a String that has been interpolated with its placeholder values from a template file.
 */
async function readFromTemplate(path,fileName,placeholders){
    try{
        let directory = cleanPath(path)
        let contents = await asyncReadFile(`${directory}/${fileName}.template.txt`,{encoding:'utf8'})
        let filled = await mkREngine(contents,placeholders)
        return filled
    }catch(error){
        console.error('Error Reading from the Template: '+error);
    }
}

/**
 * @async readFromFile
 * @param {String} path - Path of the file to be read
 * @param {String} filename - The complete filename including file extension
 * @returns Data String of the contents from that file
 */
async function readFromFile(path,filename){
    try {
        let directory = cleanPath(path)
        let contents =  await asyncReadFile(`${directory}/${filename}`,{encoding:'utf-8'})
        return contents
    } catch (error) {
        console.error('Error Reading from File: '+error);
    }
}
/**
 * @exports readFromTemplate
 * @exports readFromFile
 */
export {readFromTemplate,readFromFile}
