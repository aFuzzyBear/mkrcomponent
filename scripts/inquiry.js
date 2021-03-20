#!/usr/bin/env node
'use strict'
/**
 * @module inquiry.js
 * @description This module contains the elements for creating a user prompt screen that would allow questions to be presented to the end-user through the cli.
 * This module is used predominately for the visual presentation for the setup of the user configuration file. 
 * 
 */

/**@constant  inquirer - Import of the Inquirer.js  */
const {default:inquirer} = await import ('inquirer')


// Options
const options_writing = ['jsx','tsx']
const options_type = ['class','function']
const options_styling = ['css','sass']
const options_yesNo = ['yes','no']

/**
 * @exports questionnaire
 * @description creates a new Inquirer Prompt Instance
 */
export const questionnaire = inquirer.createPromptModule()

// Questions
/**
 * @exports questions_setup
 * @description Contains an Array of Question Objects that are pertinent for extracting the information needed from the end user as to configure that user Config file
 */
export const questions_setup = [

    {
        name:'prefWriting',
        type:'list',
        message:'What is your preferred Writing Style ?',
        choices:options_writing,
        default:'jsx'
    },
    {
        name:'prefType',
        type:'list',
        message:'What is your preferred Component Type ?',
        choices:options_type,
        default:'class'
    },
    {
        name:'prefStyle',
        type:'list',
        message:'What is your preferred Stylesheet Type ?',
        choices:options_styling,
        default:'css'
    },
    {
        name:'prefTest',
        type:'list',
        message:'Do you wish to include its own React Component test file ?',
        choices:options_yesNo,
        default:'yes'
    },
    {
        name:'prefDocs',
        type:'list',
        message:'Do you wish to Document your Component ?',
        choices:options_yesNo,
        default:'yes'
    },
    {
        name:'prefStories',
        type:'list',
        message:'Do you wish to Narrate your Component with Stories ?',
        choices:options_yesNo,
        default:'yes'
    },
    {
        name:'save',
        type:'list',
        message:'Do you wish to save these settings ?',
        choices:options_yesNo,
        default:'yes'
    },
]
/**
 * @exports questions_utility
 * @description Contains an Array of Question Objects that are used to determine the restarting, exiting and running of the utility setup.
 */
export const questions_utility=[
    {
        name:'restart',
        type:'list',
        message:'Do you wish to Restart the Setup ?',
        choices:options_yesNo,
        default:'yes'
    },
    {
        name:'exit',
        type:'list',
        message:'Do you wish to quit the setup ?',
        choices:options_yesNo,
        default:'yes'
    },

    
]
