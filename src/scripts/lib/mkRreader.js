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
import { cleanPath } from './gorbals'


/**
 * @async ReadFromTemplate
 * @param {String} path 
 * @param {String} fileName 
 * @param {Object} placeholders 
 */
async function readFromTemplate(path,fileName,placeholders){
    try{
        let directory = cleanPath(path)
        let contents = await asyncReadFile(`${directory}/${fileName}.template.txt`,{encoding:'utf8'})
        let filled = await fillTemplate(contents,placeholders)
        return filled
    }catch(error){
        console.error('Error Reading from the Template: '+error);
    }
}

/**
 * 
 * @param {String} path 
 * @param {String} filename 
 */
async function readFromFile(path,filename){
    try {
        let directory = cleanPath(path)
        return await asyncReadFile(`${directory}/${filename}`,{encoding:'utf-8'})
    } catch (error) {
        console.error('Error Reading from File: '+error);
    }
}

export {readFromTemplate,readFromFile}