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
 

import {readFile} from 'fs/promises'

 
async function readFromTemplate(path,fileName,placeholders){
    try{
        let contents = await readFile(`${path}/${fileName}.template.txt`,{encoding:'utf8'})
        let filled = await fillTemplate(contents,placeholders)
        return filled
    }catch(err){
        console.error('Error Reading from the Template: '+err);
    }
}

async function readFromFile(path,filename){
    try {
        return await readFile(`${path}/${filename}`,{encoding:'utf-8'})
    } catch (error) {
        console.error('Error Reading from File: '+error);
    }
}

export {readFromTemplate,readFromFile}