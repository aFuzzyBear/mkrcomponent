#!/usr/bin/env node
'use strict'
/**
  * @module mkRWriter
  * @description This module contains the writing data to files utility functions that were used through building the application. 
 */


/**
 * @module 'fs/promises' {writeFile as asyncWriteFile} 
 * @see https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options
 */
const {writeFile : asyncWriteFile} = await import('fs/promises')

/**
 * @module 'util' {writeFile as asyncWriteFile} 
 * @see https://nodejs.org/api/util.html#util_util
 */
const {default : util} = await import ('util')

const { display_error } = await import('./console.js')
const {cleanPath} = await import('./gorbals.js')

/**
 * @async 
 * @exports writeComponentToFile
 * @param {String} path - Path for the file to be written to
 * @param {String} name - Name of the Component that the file will be named after
 * @param {String} extension - Provide the output file type extension
 * @param {String | Buffer | Uint8Array | Object}  data - Data to be written to the file
 * @returns Asynchronously Writes the data to file to  path/name.extension. Canceling if the file already exists
 * @throws display_error('Error Writing to the file: '+ error)
 * 
 */
export async function writeComponentToFile(path,name,extension,data){
    try {
        let dir = cleanPath(path)
        return await asyncWriteFile(`${dir}/${name}.${extension}`,data,{
            encoding:'utf-8',flag:'wx'
        })
    } catch (error) {
        display_error(`Error Writing to the file: ${error}`);
    }
}
/**
 * @async 
 * @exports writeDocToFile
 * @param {String} path - Path for the file to be written to
 * @param {String | Buffer | Uint8Array |Object} data - Data to be written to the file 
 * @return Asynchronously Writes the data to file to  path/name.extension. 
 * Replacing the existing file if one exists at that location
 * @throws display_error('Error Writing to the file: '+ error)
 */
export async function writeDocToFile(path,data){
    try {
        return await asyncWriteFile(path,data,{encoding:'utf-8',flag:'w'})
        
    } catch (error) {
        display_error(`Error Writing to the file: ${error}`);
    }
}

/**
 * @async 
 * @exports writeJSObjToFile
 * @param {String} path - Path for the file to be written to, including file extension
 * @param {Object} data - JS Object Data to be written to the file 
 * @param {String} name - Name of the Variable for the File to be labeled in the Export. 
 * @return Asynchronously Writes the data to file to  path/name.extension. 
 * Replacing the existing file if one exists at that location
 * @throws display_error('Error Writing to the file: '+ error)
 *  
 */
export async function writeJSObjToFile(path,data,name='object'){
    try {
        return await asyncWriteFile(path,util.formatWithOptions({
            compact: false
        }, `const %s = %o;\nexport default %s`,name,data,name),{encoding:'utf-8',flag:'w'})
        
    } catch (error) {
        display_error(`Error Writing  Object to the file: ${error}`);
    }
}

