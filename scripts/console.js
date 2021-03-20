#!/usr/bin/env node
'use strict'
/**
 * @name console.js
 * @description Contains the named exports and values associated with 
 * the independent styling for the terminal. Using 'chalk.js'  created
 *  a variety of console output options. 
 * To help make the interface more colourful and interesting
 * 
 */




// import chalk
const {default:chalk} = await import('chalk')

/**
 * @exports title_text
 * @description Exports the mkRComponent Title Text in a colourful Purple to be displayed in the console
 */
export const title_text =chalk.keyword('purple')( `

         _     ______ _______                                               
        | |   (_____ (_______)                                          _   
  _____ | |  _ _____) )|      ___  ____  ____   ___  ____  _____ ____ _| |_ 
 |     \\| |_/ )  __  / |     / _ \\|    \\|  _ \\ / _ \\|  _ \\| ___ |  _ (_   _)
 | | |  |  _ (| |  \\ \\ |____| |_| | | | | |_| | |_| | | | | ____| | | || |_ 
 |_|_|__|_| \\_)_|   |__\\_____)___/|_|_|_|  __/ \\___/|_| |_|_____)_| |_| \\__)
                                        |_|                              

`)
/**
 * @exports setup_text
 * @description Exports the mkRComponent Setup Text in a colourful Green to be displayed in the console
 */
export const setup_text = chalk.keyword('green')(`

          _     ______   ______                         
         | |   (_____ \\ / _____)        _               
    ____ | |  _ _____) | (____  _____ _| |_ _   _ ____  
   |    \\| |_/ )  __  / \\____ \\| ___ (_   _) | | |  _ \\ 
   | | | |  _ (| |  \\ \\ _____) ) ____| | |_| |_| | |_| |
   |_|_|_|_| \\_)_|   |_(______/|_____)  \\__)____/|  __/ 
                                                 |_|    
`)

/**
 * @constant theme_success
 * @description Creates a Placeholder for the Success Tag to be displayed in the Console
 */
const theme_success = chalk.keyword('purple').bold.bgKeyword('white')('✔️\   Success! \t')
/**
 * @constant theme_warn
 * @description Creates a Placeholder for the Warning Tag to be displayed in the Console
 */
const theme_warn = chalk.keyword('purple').bold.bgKeyword('orange')
('⚠️\   Warning: \t')
/**
 * @constant theme_error 
 * @description Creates a Placeholder for the Error Tag to be displayed in the Console
 */
const theme_error = chalk.keyword('purple').bold.bgKeyword('red')('❗❗\  Error: \t')

/**
 * @function theme_preference
 * @param {String} type 
 * @returns Creates a Placeholder for taking in the 'type' to be displayed in the Console
 */
const theme_preference =(type)=> chalk.keyword('navy').bold.bgKeyword('green')('👉\ ' +' ' + type +' : ' )
/**
 * @function theme_link
 * @param {String} str 
 * @returns Takes a String and returns it with a underline and an Orange colour 
 */
const theme_link =(str) => chalk.hex('#D58B2A').underline(str)

/**
 * @exports display_preference
 * @param {String} type 
 * @param {String} value 
 * @returns Stylised Output to the Console displaying the User Preferences 
 */
export const display_preference = (type,value) => console.log(theme_preference(type) + '  ' + theme_link(value))

/**
 * @exports display_output
 * @param  {...any} args 
 * @returns Standard Output to the Console 
 */
export const display_output = (...args)=> console.log(...args)

/**
 * @exports display_success
 * @param  {...any} args 
 * @returns Stylised Output to the Console displaying a Success Message
 */
export const display_success = (...args) =>  console.log(theme_success+ args)
/**
 * @exports display_warn
 * @param  {...any} args 
 * @returns Stylised Output to the Console displaying a Warning Message
 */

export const display_warn = (...args) => console.warn( theme_warn + args )
/**
 * @exports display_error
 * @param  {...any} args 
 * @returns Stylised Output to the Console displaying an Error Message
 */

export const display_error = (...args) => console.error(theme_error + args)
