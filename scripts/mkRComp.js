#!/bin/env node
'use strict'
import { display_output, display_preference, display_success, title_text } from './console.js'
import { cleanPath, createComponent, inputValidation, } from './gorbals.js'
import mkRdir from './mkRdir.js'
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



async function decisionTree(values,info){
    let ext
    if(values.writing.jsx && values.writing.class){
        ext = values.writing.preference
        await createComponent(info,'jsxClass',ext)
            .then(display_preference('Jsx Class',`${info.path_dir}/${info.placeholder.name}.${ext}`))
        
    }
    if(values.writing.tsx && values.writing.class){
        ext = values.writing.preference
       await createComponent(info,'tsxClass',ext)
        .then(display_preference('TSX Class',`${info.path_dir}/${info.placeholder.name}.${ext}`))
        
    }
    if(values.writing.jsx && values.writing.function){
        ext = values.writing.preference
       await createComponent(info,'jsxFunction',ext)
        .then(display_preference('JSX Function',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.writing.tsx && values.writing.function){
        ext = values.writing.preference
      await createComponent(info,'tsxFunction',ext)
        .then(display_preference('TSX Function',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.styling.css){
        ext = values.styling.preference
       await createComponent(info,'css',ext)
        .then(display_preference('CSS',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.styling.sass){
        // TODO: Create a CSS.MAP and CSS File, FIX THE TEMPLATES
        ext = values.styling.preference
       await createComponent(info,'sass',ext)
        .then(display_preference('SASS',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.storytelling.story && values.documentation.docs){
        ext = `mdx`
       await createComponent(info,'mdxStory',ext,`${info.placeholder.name}-readme`)
        .then(display_preference('MDX Readme',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.storytelling.story && values.writing.jsx){
        ext = `stories.js`
        createComponent(info,'jsxStory',ext)
            .then(display_preference('JSX Story',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.storytelling.story && values.writing.tsx){
        ext = `stories.js`
        createComponent(info,'tsxStory',ext)
            .then(display_preference('TSX Story',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.testing.test){
        ext=`test.js`
        createComponent(info,'reactTestFile',ext)
            .then(display_preference('Test File',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.documentation.docs && ! values.storytelling.story){
        ext=`md`
        createComponent(info,'readme',ext,`README-${info.placeholder.name}`)
            .then(display_preference('Markdown Readme',`${info.path_dir}/${info.placeholder.name}.${ext}`))
       
    }
}


async function mkRComponent(name){
    //Setting up the function timer
    let time, start= process.hrtime()
    let parser =(hrtime)=>(hrtime[0] + (hrtime[1] / 1e9)).toFixed(3);
    // User Settings
    const {getInternals:settings} = await import('./gorbals.js')
    const config = await settings()
    display_output(title_text)
    //1) Make Directory For the Component
    await mkRdir(cleanPath(config.routes.component),name)
    
    const info = {
        path_dir:`${cleanPath(config.routes.component)}/${name}`,
        path_temp:(config.documentation.docs) ? `${cleanPath(config.routes.templates)}/JSDoc` : `${cleanPath(config.routes.templates)}/Clean`,
        placeholder: {
            name: name,
            style: config.styling.preference
        }
    }
    // 2) determine which files to make
    await decisionTree(config,info)
    // 3) Display animation then success story
    time = parser(process.hrtime(start))
    display_success('⏱️\    That took you all of: ' + time + 'ms  🤯')
}



export default mkRComponent
