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

import {mkdirSync as asyncMkdir} from 'fs/promises'
import {existsSync as checkPath} from 'fs'
 // Make Directory

 async function mkdirectory(path,name){
    try {
        if(!checkPath(path)) {
            return await asyncMkdir(`${path}/${name}`)
        }else{
            throw new Error(`Path Doesn't Exist' ${path}`)
        }
        
    
    } catch (error) {
        console.error(`Error Making the Component Directory: ${error}` )
    }
}

export {mkdirectory}