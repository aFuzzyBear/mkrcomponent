#!/usr/bin/env node
'use strict'
/**
  * 
 ** 
 **              _             _______ _ _        ______  
 **             (_)  _        (_______|_) |      (_____ \ 
 **  _ _ _  ____ _ _| |_ _____ _____   _| | _____ _____) )
 ** | | | |/ ___) (_   _) ___ |  ___) | | || ___ |  __  / 
 ** | | | | |   | | | |_| ____| |     | | || ____| |  \ \ 
 **  \___/|_|   |_|  \__)_____)_|     |_|\_)_____)_|   |_|
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

/**
 * @async writeComponentToFile
 * @param {String} name - Name of the Component that the file will be named after
 * @param {String} path - Path for the file to be written to
 * @param {String} extension - Provide the output file type extension
 * @param {String | Buffer | Uint8Array}  data - Data to be written to the file
 * @returns Asynchronously Writes the data to file to  path/name.extension. Replacing the file if it exists at the location.
 * @throws console.error('Error Writing to the file: '+ error)
 * 
 */
async function writeComponentToFile(name,path,extension,data){
    try {
        return await asyncWriteFile(`${path}/${name}.${extension}`,data,{
            options:'utf-8'
        })
    } catch (error) {
        console.error(`Error Writing to the file: ${error}`);
    }
}

/**
 * @async writeDocToFile
 * @param {String} path 
 * @param {String | Buffer} data 
 * @return Asynchronously Writes the data to file to  path/name.extension. Replacing the file if it exists at the location.
 * @throws console.error('Error Writing to the file: '+ error)
 */
async function writeDocToFile(path,data){
    try {
        return await asyncWriteFile(path,data,{options:'utf-8'})
        
    } catch (error) {
        console.error(`Error Writing to the file: ${error}`);
    }
}

/**
 * @exports writeComponentToFile
 * @exports writeDocToFile
 */
export {writeComponentToFile, writeDocToFile};