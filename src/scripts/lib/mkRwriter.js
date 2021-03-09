#!/usr/bin/env node
'use strict'
/**
  * @module mkRWriter
 ** 
 **  
 **         _     ______               _                   
 **        | |   (_____ \  _   _      (_)  _               
 **   ____ | |  _ _____) )| |_| | ____ _ _| |_ _____  ____ 
 **  |    \| |_/ )  __  / | | | |/ ___) (_   _) ___ |/ ___)
 **  | | | |  _ (| |  \ \ | | | | |   | | | |_| ____| |    
 **  |_|_|_|_| \_)_|   |_| \___/|_|   |_|  \__)_____)_|    
 **                                                                
 * 
 * @description A utility file containing functions that allow to write data
 * To files that are found in the destination described by the PATH variable. 
 * writeFile utilises NodeJS 'fs' package to provide file system abilities.
 * In this case we will be utilising the asynchronous WriteFile method. 
 * This is a named export file. 
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
 * @module 'fs/promises' {writeFile as asyncWriteFile} 
 * @see https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options
 */
import {writeFile as asyncWriteFile} from 'fs/promises';
import util from 'util'
import {cleanPath} from './gorbals.js'

/**
 * @async writeComponentToFile
 * @param {String} path - Path for the file to be written to
 * @param {String} name - Name of the Component that the file will be named after
 * @param {String} extension - Provide the output file type extension
 * @param {String | Buffer | Uint8Array | Object}  data - Data to be written to the file
 * @returns Asynchronously Writes the data to file to  path/name.extension. Canceling if the file already exists
 * @throws console.error('Error Writing to the file: '+ error)
 * 
 */
async function writeComponentToFile(path,name,extension,data){
    try {
        let dir = cleanPath(path)
        return await asyncWriteFile(`${dir}/${name}.${extension}`,data,{
            encoding:'utf-8',flag:'wx'
        })
    } catch (error) {
        console.error(`Error Writing to the file: ${error}`);
    }
}
/**
 * @async writeDocToFile
 * @param {String} path - Path for the file to be written to
 * @param {String | Buffer | Uint8Array |Object} data - Data to be written to the file 
 * @return Asynchronously Writes the data to file to  path/name.extension. 
 * Replacing the existing file if one exists at that location
 * @throws console.error('Error Writing to the file: '+ error)
 */
async function writeDocToFile(path,data){
    try {
        return await asyncWriteFile(path,data,{encoding:'utf-8',flag:'w'})
        
    } catch (error) {
        console.error(`Error Writing to the file: ${error}`);
    }
}
async function writeObjToFile(path,data,name='object'){
    try {
        return await asyncWriteFile(path,util.formatWithOptions({
            compact: false
        }, `const %s = %o;\nexport default %s`,name,data,name),{encoding:'utf-8',flag:'w'})
        
    } catch (error) {
        console.error(`Error Writing  Object to the file: ${error}`);
    }
}

/**
 * @exports writeComponentToFile
 * @exports writeDocToFile
 */
export {writeComponentToFile, writeDocToFile, writeObjToFile};