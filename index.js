#!/usr/bon/env node
'use strict'
/*
*
*          _     ______ _______                                               
*         | |   (_____ (_______)                                          _   
*    ____ | |  _ _____) )       ___  ____  ____   ___  ____  _____ ____ _| |_ 
*   |    \| |_/ )  __  / |     / _ \|    \|  _ \ / _ \|  _ \| ___ |  _ (_   _)
*   | | | |  _ (| |  \ \ |____| |_| | | | | |_| | |_| | | | | ____| | | || |_ 
*   |_|_|_|_| \_)_|   |_\______)___/|_|_|_|  __/ \___/|_| |_|_____)_| |_| \__)
*                                         |_| 
*
*                   **** Make React Component **** 
* mkRComponent is a utility cli application that takes a string from the user 
* and creates a  JSX file within its own Component Folder for that named 
* Component.
* 
* It outputs a template of a Standard React Component Class or Function. It comes with Template scripts for each Component type: along with options for accompanying files like associated stylesheet and test file, allowing the 
* developer freedom of time from having to repeat the same setup for each file. 
* 
* ComponentDirectory = src/components/${componentName}/
* componentName = userInput - string
* isJSXClass = userInput - boolean
* isJSXFunction = userInput - boolean
* isCSSInc = userInput - boolean
* isTESTInc = userInput - boolean
*
*  
* 1) Create the Directory
* 2) User Input as a String: Component Name
* 3) UpperCase the UserInput
* 4) Create a folder for the Component. 
* 5) Create a *.jsx Component file
* 6) Output to the file-> A template to create a React Class Component
* 7) Output to the console-> Success message and a link to the file
*
*  created by
*    _     _   
*   (c).-.(c)  
*    / ._. \   
*  __\( Y )/__  created by:
* (_.-/'-'\-._)    _         _ 
*    ||   ||    _.|_  _ _   |_) _  _.._
*  _.' `-' '._ (_|||_|/_/_\/|_)(/_(_||  
* (.-./`-'\.-.)           /        
*  `-'     `-'     
*/


//External Modules declared here

import * as fsPromises from 'fs/promises';
import util from 'util';
import chalk from 'chalk';



// Setting up Abort Controller

const ac = new AbortController()
const signal = ac.signal;;

// Regex Patterns

const isYes = /^y(es)?$/gi
const isNo = /^n(o)?$/gi
const isWord =/([A-Z]|[a-z])\w+/gi

// Global Functions

/**
 * Capitalise First Letter of a String
 * @param {string} str 
 * @returns - string - First Letter is only Capitalised
 */
const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Template Engine
 * @param {string} templateString 
 * @param {object} templateVars 
 * Takes a template with object placeholders embedded within, and outputs
 * a transpiled string where the placeholders are filled with their respective 
 * attributes.
 */
const fillTemplate = (templateString, templateVars)=>{
    let func = new Function(...Object.keys(templateVars),  "return `"+templateString +"`;")
    return func(...Object.values(templateVars));
}

/**
 * @function debug_memUsage
 * Provides a memory usage summary for the existing process
 * Outputs the response to the console in Human Readable format
 */
const debug_memUsage = ()=>{
    //Obtains the nodejs memory for the entire process
    const used = process.memoryUsage();
    for (let key in used) {
      console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

const debug_racer = (callback)=>{
    console.time(`${callback.constructor.name}`)
     callback
    console.timeEnd(`${callback.constructor.name}`)
}
//Questions

//Event Listeners
signal.addEventListener('abort',()=>{
    console.log('❎ mkRComponent has died of natural causes...😔 ')
},{once:true})

//SetTimeout to abort application after a 2 minute idle time period

setTimeout(()=>ac.abort(),10000)

//Async File System Functions

async function readTemplate(fileName,compName){
    try{
        let contents = await fsPromises.readFile(`./templates/${fileName}.template.js`,{encoding:'utf8'})
        let filled = await fillTemplate(contents,{compName:capitalise(compName)})
        return filled
    }catch(err){
        console.error('Error Reading the File: '+err);
    }
}
// Write the Output file
async function writeFile(compName,buffer,extension){
    try {
        let write = fsPromises.writeFile(`./src/components/${compName}/${compName}.${extension}`,buffer,{
            options:'utf-8'
        })
        return write
    } catch (error) {
        console.error('Error Writing to the file: '+ error);
    }
}
// Make Directory
async function mkdirectory(compName){
    try {
        
        const mkdir = await fsPromises.mkdir(`./src/components/${compName}`,(err)=>{
            if(err) throw err
        })
        return mkdir
    
    } catch (error) {
        console.error(`Error Making the Component Directory: ${error}` )
    }
}


// File buffers
let fileBufferdemo,jsxClassBuffer,jsxFuncBuffer,tsxFuncBuffer,tsxClassBuffer,cssBuffer,testBuffer

async function initJSXClassBuffer(compName){
    return jsxClassBuffer = await readTemplate('jsxClass',compName)
    
}
async function initJSXFuncBuffer(compName){
    return jsxFuncBuffer = await  readTemplate('jsxFunction',compName)

}
async function initCSSFuncBuffer(compName){
    return cssBuffer = await  readTemplate('cssStylesheet',compName)

}
async function initTestBuffer(compName){
    return testBuffer = await readTemplate('reactTestFile',compName)
}

async function initTSXClassBuffer(compName){
    return tsxClassBuffer = await readTemplate('tsxClass',compName)
}

async function initTSXFuncBuffer(compName){
    return tsxFuncBuffer = await  readTemplate('tsxFunction',compName)
}

// 
async function mkComp(compName){

}




// Debuggers

// debug_racer(capitalise('mehe'))
// debug_racer(initCSSFuncBuffer('mehe'))
// debug_memUsage()

debug_racer(writeFile('Ben',await initJSXClassBuffer('ben'),'js'))


// Demo Script
// fileBufferdemo = await readFile('jsxClass','demo')
// console.log(fileBufferdemo,jsxClassBuffer,jsxFuncBuffer,tsxFuncBuffer,tsxClassBuffer,cssBuffer,testBuffer)
// if(fileBufferdemo){
//     await mkdirectory('demo')
//     await writeFile('demo',fileBufferdemo,'jsx')
// }
