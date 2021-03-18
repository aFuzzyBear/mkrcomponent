#!/usr/bin/env node
'use strict'

import mkRProgram from "../scripts/command.js"



/**
**        _     ______ _______                                               
**       | |   (_____ (_______)                                          _   
**  ____ | |  _ _____) )       ___  ____  ____   ___  ____  _____ ____ _| |_ 
** |    \| |_/ )  __  / |     / _ \|    \|  _ \ / _ \|  _ \| ___ |  _ (_   _)
** | | | |  _ (| |  \ \ |____| |_| | | | | |_| | |_| | | | | ____| | | || |_ 
** |_|_|_|_| \_)_|   |_\______)___/|_|_|_|  __/ \___/|_| |_|_____)_| |_| \__)
**                                       |_| 
* @version 1.0.0
* @author aFuzzyBear
* @see https://github.com/aFuzzyBear/
* @description           
**                   **** Make React Component **** 
* mkRComponent is a utility cli application which allows the developer to 
* create a React Component and its associated files, such as:
*    -[JSX/TSX] [Class/Function] Component
*    -Component's Stylesheet
*    -Component's Test File
*    -Component's Story 
*    -Component's Readme
*
* These are files that are made can be specified by the developer to select 
* which files they wish to make, through the initial setup. Where it would ask 
* a series of questions to generate a configuration file. 'mkR.config.js' which * can be later altered by the developer, either directly or by re-running the 
* initialisation setup (mkRComp init). This would then inform the utility 
* application of the new component requirements of the developer. 
*
* The Output of the utility application are prefabricated files that are 
* produced with the relevant Component Name and links to its accompanying 
* documents. along with the standard file setup with imports and simple body 
* content that lets you quickly dive in and get going.
* 
* The purpose of this utility application is to save some developer burden when * creating or setting up a new React Component. By prefabricating templates
* with the necessary component structures, would save you the developer the
* most precious commodity of all...your time.
* 
* If you have any problems or issues you you can message me directly. 🖖 
* *      _     _     
* *     (c).-.(c)    
* *      / ._. \     
* *    __\( Y )/__    created by:
* *   (_.-/'-'\-._)      _         _ 
* *      ||   ||      _.|_  _ _   |_) _  _.._
* *    _.' `-' '._   (_|||_|/_/_\/|_)(/_(_||  
* *   (.-./`-'\.-.)             /        
* *    `-'     `-'    
*/

// const {default:mkRComponent} = await import('./src/scripts/mkRComp.js')
// mkRComponent('dad')

mkRProgram.parse()