#!/usr/bin/env node
'use strict'
/**
 * @module Command
 * @description Contains the CLI interface for the mkRComponent 
 * Using 'Commander.js' we can process the arguments entered from the cli 
 * From which we can then instruct the application to create the compononets as 
 * specified by the User through the mkR.config.js or it would launch the setup 
 * if the file is not found in the root directory
 */


/**
 * @import Command from {commander}
 * @see https://github.com/tj/commander.js/
 */
const { Command } = await import( "commander")

// Import the Setup Utility Function
const {default:mkRSetup} = await import( "./mkRSetup.js")
// Import Utility functions 
const { checkConfig, inputValidation } = await import( "./gorbals.js")
// Import the Component Maker Utility Function
const {default:mkRComponent} = await import( './mkRComp.js')



/**@constant mkRProgram - Program's CLI Interface */
const mkRProgram = new Command()

mkRProgram
    // Declaring the Version of the Program
    .version('1.0.0')
    // Default CLI Arguments
    .arguments('<name...>')
    .description('mkRComponent',{
        name:'Name of the Component'
    })
    .action((name)=>{
        // String Sanitisation
        let str = inputValidation(Object.values(name).join(' '))
        // If Config File Exists - Create Component Or Run Setup
        return (checkConfig()) ? mkRComponent(str): mkRSetup()
    })
    
    
/**
 * @export mkRProgram
 */
export default mkRProgram