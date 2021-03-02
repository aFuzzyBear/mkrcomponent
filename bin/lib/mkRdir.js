#!/bin/env node
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
 * The mkRdir function asynchronously makes a directory at the designated location, it then returns this and exist the function.
 * If the directory already exists within that location it would exit and provide an error to the console, explaining what went wrong. 
 * It will not overwrite an existing directory, if the path or the name is already valid it would exit and the program will return. 
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

import {mkdirSync as asyncMkdir} from 'fs/promises'
import {existsSync as checkPath} from 'fs'
 // Make Directory

 async function mkRdir(path,name){
    try {
        if(!checkPath(path)) {
            return await asyncMkdir(`${path}/${name}`)
        }else{
            throw new Error(`Path Already Exist' ${path}`)
        }
    } catch (error) {
        console.error(`Error Making the Component Directory: ${error}` )
    }
}

export default mkRdir