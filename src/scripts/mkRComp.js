#!/bin/env node
'use strict'
import { templateBuffer } from './buffer.js'
import * as debug from './debugger.js'
import { cleanPath, toPascalCase } from './gorbals.js'
import mkRdir from './mkRdir.js'
import { writeComponentToFile } from './mkRwriter.js'
/**
 * Wrapper Functions
 * Steps:
 * 1) Make Component Directory
 * 2) Make File from Template
 * 
 * 
 */


//Get configuration file.
//Get the settings from the config file
//Apply the settings, 
//Make the files up in accordance to the settings
// let values = await getInternals()

// console.log(values);

async function mkRComp(name){
    // Component Name- User Input
    let NAME = toPascalCase(name)
    // User Settings
    const {default:settings} = await import('./getInternals.js')
    const values = await settings()
    let path_component = cleanPath(values.routes.component)
    // Placeholder for the template
   let placeholder = {
       name: NAME,
       style: values.styling.preference
   }
    //1) Make Directory For the Component
    await mkRdir(path_component,NAME)
    // 2) determine which files to make
    // Documented Templates
    let path_dir = `${path_component}/${NAME}`
    let path_template = (values.documentation.docs) ? `${cleanPath(values.routes.templates)}/JSDoc` : `${cleanPath(values.routes.templates)}/Clean`
    
    
        let ext
        if(values.writing.jsx && values.writing.class){
            ext = values.writing.preference
            await writeComponentToFile(path_dir,NAME,ext
            , await templateBuffer(path_template,'jsxClass',placeholder))
            
        }
        if(values.writing.tsx && values.writing.class){
            ext = values.writing.preference
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'tsxClass',placeholder))
        
        }
        if(values.writing.jsx && values.writing.function){
            ext = values.writing.preference
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'jsxFunction',placeholder))
        }
        if(values.writing.tsx && values.writing.function){
            ext = values.writing.preference
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'tsxFunction',placeholder))

        }
        if(values.styling.css){
            ext = values.styling.preference
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'css',placeholder))
        }
        if(values.styling.sass){
            ext = values.styling.preference
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'sass',placeholder))
        }
        if(values.storytelling.story){
            ext = `mdx`
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'mdx',placeholder))
        }
        if(values.storytelling.story && values.writing.jsx){
            ext = `stories.js`
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'jsxStory',placeholder))
        }
        if(values.storytelling.story && values.writing.tsx){
            ext = `stories.js`
            await writeComponentToFile(path_dir,NAME,ext
                , await templateBuffer(path_template,'tsxStory',placeholder))
        }
        if(values.testing.test){
            ext=`test.js`
            await writeComponentToFile(path_dir,NAME,ext
            , await templateBuffer(path_template,'reactTestFile',placeholder))
        }
        if(values.documentation.docs){
            ext=`md`
            await writeComponentToFile(path_dir,NAME+'-readme',ext
            , await templateBuffer(path_template,'readme',placeholder))
        }
  
}



export default mkRComp

