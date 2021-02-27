#!/usr/bin/env node
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
* Path for ComponentDirectory = src/components/${componentName}/
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
import util, { formatWithOptions } from 'util';
import chalk from 'chalk';
import { existsSync } from 'fs';
import config from "./config.js";
const PATH = './demo/components'
let compName = ""

// Setting up Abort Controller
console.log(config)
const ac = new AbortController()
const signal = ac.signal;;

// Regex Patterns

const isYes = /^y(es)?$/gi
const isNo = /^n(o)?$/gi
const isWord =/([A-Z]|[a-z])\w+/gi

// Global Functions


/**
 * toPascalCase
 * @param {String} input 
 * @returns A string that has been converted into Pascal Case for keeping with the Naming convention required for naming Components. 
 */
const toPascalCase=(input)=>{
    return `${input}`
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w+)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, 'g'), '')
      .replace(new RegExp(/\w/), s => s.toUpperCase());
}

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

async function readTemplate(path,fileName,placholders){
    try{
        let contents = await fsPromises.readFile(`${path}/${fileName}.template.txt`,{encoding:'utf8'})
        let filled = await fillTemplate(contents,placholders)
        return filled
    }catch(err){
        console.error('Error Reading the File: '+err);
    }
}

// Write the Output file
async function writeFile(compName,path,extension,data){
    try {
        let write = fsPromises.writeFile(`${path}/${name}.${extension}`,data,{
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
            const mkdir = await fsPromises.mkdir(`${PATH}/${name}`,(err)=>{
                if(err) throw err
            })
            return mkdir
        
    
    } catch (error) {
        console.error(`Error Making the Component Directory: ${error}` )
    }
}


// File buffer

async function fileBuffer(path,fileName,placeholders){
    return await readTemplate(path,fileName,placeholders)
}
async function iniConfig(fileName,path){
    return JSON.stringify(await readFile(fileName,path))
}

import fs from 'fs';
const{name,prefWritting,useJSDocs,directories:{component:componentPath}} = config
console.log(name,prefWritting,useJSDocs,componentPath)
let data = JSON.stringify(config,null,2)


// Debuggers

// debug_racer(capitalise('mehe'))
// debug_racer(initCSSFuncBuffer('mehe'))
debug_memUsage()

// debug_racer(writeFile('racer',await initJSXClassBuffer('racer'),'js'))



let str = "dad"
let input = toPascalCase(str)
let path = `${PATH}/${input}`

if(!existsSync(path)) await mkdirectory(input)
// await writeFile(input,await iniConfig(input,`${PATH}/${input}`),'json')
fs.writeFile('./demo.json',data,(err)=>console.error(err))
await writeFile(str,path,'css',await fileBuffer(`./templates/`,'css',{compName:str}))
// await writeFile(input,await initBuffer('css',input),'css')
