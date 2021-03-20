#!/usr/bin/env node
'use strict'
/**
 * @module mkRDir  
 * @description
 * Makes a NAME Directory at the location provided by the PATH argument.
 * The NAME is the Component name that is being sequestered. 
 * The mkRDir function asynchronously makes a directory at the designated location, it then returns and exist the function.
 * If the directory already exists within that location it would exit and provide an error to the console, explaining what went wrong. 
 
 */

 /**
  * @module 'fs/promises' {mkdir as asyncMkdir}
  * @see https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_options
  */
  const {mkdir:asyncMkdir} = await import('fs/promises')
 
  /**
   * @module 'fs' {existsSync as checkPath}
   * @see https://nodejs.org/api/fs.html#fs_fs_existssync_path
   */
 const {existsSync:checkPath} = await import('fs')
 // Make Directory

 /**
  * @async
  * @exports mkRDir
  * @param {String} path - Path of the Parent directory for the file to be made in.
  * @param {String} name - Name of the Child directory to be created at the end of the path
  * @returns Creates a new File for the Component at the designated location 
  */
export default async function mkRDir(path,name){
    try {
        if(checkPath(`${path}/${name}`)) {
            return
        }else{
            await asyncMkdir(`${path}`,{recursive:true})
            await asyncMkdir(`${path}/${name}`,{recursive:true})
        }
    } catch (error) {
        display_error(`Error Making the Component Directory: ${error}` )
    }
}

