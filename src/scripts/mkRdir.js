#!/bin/env node
'use strict'
/**
 *@module mkRdir  
 **        _     ______     _ _       
 **       | |   (_____ \   | (_)      
 **  ____ | |  _ _____) )__| |_  ____ 
 ** |    \| |_/ )  __  // _  | |/ ___)
 ** | | | |  _ (| |  \ ( (_| | | |    
 ** |_|_|_|_| \_)_|   |_\____|_|_|    
 **                                   
 *
 * @description
 * Makes a NAME Directory at the location provided by the PATH argument.
 * The NAME is the Component name that is being sequestered. 
 * The mkRdir function asynchronously makes a directory at the designated location, it then returns and exist the function.
 * If the directory already exists within that location it would exit and provide an error to the console, explaining what went wrong. 
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
  * @module 'fs/promises' {mkdir as asyncMkdir}
  * @see https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_options
  */
 import {mkdir as asyncMkdir} from 'fs/promises'
 
  /**
   * @module 'fs' {existsSync as checkPath}
   * @see https://nodejs.org/api/fs.html#fs_fs_existssync_path
   */
 import {existsSync as checkPath} from 'fs'
import {cleanPath} from './gorbals.js'
 // Make Directory

 /**
  * @default 
  * @async mkRdir
  * @param {String} path - Path of the Parent directory for the file to be made in.
  * @param {String} name - Name of the Child directory to be created at the end of the path
  */
async function mkRdir(path,name){
    try {
        let directory = cleanPath(path)
        
        if(checkPath(directory)) {
            await asyncMkdir(`${directory}/${name}`,{recursive:true})
        }else{
            await asyncMkdir(`${directory}`,{recursive:true})
            mkRdir(directory,name)
        }
    } catch (error) {
        console.error(`Error Making the Component Directory: ${error}` )
    }
}

export default mkRdir
