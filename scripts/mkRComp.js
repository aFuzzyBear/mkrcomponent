#!/usr/bin/env node
'use strict'
/**
 * @module mkRComp.js
 * @description Contains the logic and instructions on making the component files from the templates as per instructed from the user config file
 */

// Imports Displays
const { display_output, display_preference, display_success, title_text } = await import('./console.js')
// Imports Utility Functions
const{ cleanPath, createComponent, getInternals} = await import('./gorbals.js')
// Imports mkRdir
const{default:mkRDir} = await import('./mkRDir.js')

/**
 * @async decisionTree
 * @param {Object} values - User Config Values
 * @param {Object} info - File information
 * @description Takes the values from the User config file and determines which files to make. This is the logic group behind the mkRComponent.
 */
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
        ext = values.styling.preference
       await createComponent(info,'sass',ext)
        .then(display_preference('SASS',`${info.path_dir}/${info.placeholder.name}.${ext}`))
       await createComponent(info,'cssOutput','css')
        .then(display_preference('Output CSS',`${info.path_dir}/${info.placeholder.name}.css`),)
       await createComponent(info,'cssMapFile','css.map')
        
    }
    if(values.storytelling.story && values.documentation.docs){
        ext = `mdx`
       await createComponent(info,'mdx',ext,`${info.placeholder.name}-readme`)
        .then(display_preference('MDX Readme',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.storytelling.story && values.writing.jsx){
        ext = `stories.js`
        createComponent(info,'jsxStory',ext)
            .then(display_preference('JSX Story',`${info.path_dir}/${info.placeholder.name}.${ext}`))
    }
    if(values.storytelling.story && values.writing.tsx){
        ext = `stories.ts`
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

/**
 * @async
 * @exports mkRComponent
 * @param {String} name - Component Name
 * @description Utility function for creating the component from the name entered into it. 
 * This would then create the Component file within the src directory, It would then collate the User values and file information and apply the decisionTree logic. Creating the files as specified by the user. Providing outputs to the terminal when successful
 */
export default async function mkRComponent(name){
    //Setting up the function timer
    let time, start= process.hrtime()
    // formats the time from nano to milliseconds
    let formatTimer =(hrtime)=>(hrtime[0] + (hrtime[1] / 1e6)).toFixed(0);
    // User Settings
    const config = await getInternals()
    // Display the Title Text
    display_output(title_text)
    // Make Directory For the Component
    await mkRDir(cleanPath(config.routes.component),name)
    // Generate the File Information
    const info = {
        path_dir:`${cleanPath(config.routes.component)}/${name}`,
        path_temp:(config.documentation.docs) ? `${cleanPath(config.routes.templates)}/JSDoc` : `${cleanPath(config.routes.templates)}/Clean`,
        placeholder: {
            name: name,
            style: config.styling.preference
        }
    }
    // Apply the Component Logic and make the files
    await decisionTree(config,info)
    // 3) Obtain the time elapsed for the execution  of the function
    time = formatTimer(process.hrtime(start))
    // Display the timer to the Terminal
    display_success('⏱️\    That took you all of: ' + time + 'ms 🤯')
}



