#!/bin/env node
'use strict'

import fs from 'fs'

import inquirer from 'inquirer'
import { extrapolate } from './gorbals.js'
import mkRSetup from './mkRInit.js'
let quest = [
    {
        name:'Run',
        type:'list',
        message:'Do you wish to Run the Initialisation Setup?',
        choices:['yes','no'],
        default:'yes'
    }
]
let quiz =inquirer.createPromptModule()
function handleErr(){
    console.log(`Configuration File doesn't exist: `);
    quiz(quest).then(answers=>{
        switch (answers.Run){
            case 'yes':
                mkRSetup()
                break;
            case 'no':
                process.exit(0)
        }
    }) 
}

async function getInternals(){
    if(fs.existsSync('mkR.config.js')){
        const {default: mk} = await import('../../mkR.config.js')
        let  internals = await extrapolate(mk)
        return internals
    }
    else{
        handleErr();
    }
}

export default getInternals