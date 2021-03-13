#!/usr/bin/env node
'use strict'

import mkRComp from "./src/scripts/mkRComp.js"

/**
**        _     ______ _______                                               
**       | |   (_____ (_______)                                          _   
**  ____ | |  _ _____) )       ___  ____  ____   ___  ____  _____ ____ _| |_ 
** |    \| |_/ )  __  / |     / _ \|    \|  _ \ / _ \|  _ \| ___ |  _ (_   _)
** | | | |  _ (| |  \ \ |____| |_| | | | | |_| | |_| | | | | ____| | | || |_ 
** |_|_|_|_| \_)_|   |_\______)___/|_|_|_|  __/ \___/|_| |_|_____)_| |_| \__)
**                                       |_| 
* @version 1.0.0
* @description           **** Make React Component **** 
* mkRComponent is a utility cli application that takes a string from the user 
* and creates a  JSX file within its own Component Folder for that named 
* Component.
* 
* It outputs a template of a Standard React Component Class or Function. It comes with Template scripts for each Component type: along with options for accompanying files like associated stylesheet, test file,storybooks and more allowing the developer freedom of time from having to repeat the same setup for each file. 
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
*  
* *      _     _     
* *     (c).-.(c)    
* *      / ._. \     
* *    __\( Y )/__    created by:
* *   (_.-/'-'\-._)      _         _ 
* *      ||   ||      _.|_  _ _   |_) _  _.._
* *    _.' `-' '._   (_|||_|/_/_\/|_)(/_(_||  
* *   (.-./`-'\.-.)             /        
* *    `-'     `-'    
* @author aFuzzyBear
* @see https://github.com/aFuzzyBear/
*/

mkRComp('mehe')