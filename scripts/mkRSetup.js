#!/usr/bin/env node
'use strict'
/**
 * @module mkRSetup.js
 * @description
 * This module contains the setup utility function to prompt the user for question to set out their preferences from the CLI, it would then take these inputs and create a configuration file for the user. 
 */

const  {default : mkRConfig} = await import("./mkRConfig.js");
const {questionnaire, questions_setup,questions_utility} = await import('./inquiry.js')
const {default : inquirer} = await import('inquirer')
import { display_output, setup_text } from "./console.js";



let userSetup = new mkRConfig()

function mkRSetup(){
    display_output(setup_text)
    questionnaire(questions_setup).then(answers=>{
        if(answers.prefWriting){
            userSetup.setWriting = answers.prefWriting
        }
        if(answers.prefType){
            userSetup.setType= answers.prefType
        }
        if(answers.prefStyle){
            userSetup.setStyling = answers.prefStyle
        }
        if(answers.prefTest){
            userSetup.setTests = answers.prefTest
        }
        if(answers.prefDocs){
            userSetup.setDocs = answers.prefDocs
        }
        if(answers.prefStories){
            userSetup.setStories = answers.prefStories
        }
        if(answers.save === 'yes'){
            userSetup.exportConfig().then(console.log('Setup Configuration has been successfully saved:  ')).catch(err=>display_error(err))
        }
        else if(answers.save === 'no'){
            inquirer.prompt(questions_utility[0]).then(ans=>{
                if(ans.restart === 'yes'){
                   return prompt_init(questions_setup)
                }
                else if(ans.restart === 'no'){
                    inquirer.prompt(questions_utility[1]).then(res=>{
                        if(res.quit === 'yes'){
                            return process.exit(0)
                        }else if (res.quit === 'no'){
                            return prompt_init(questions_setup)
                        }
                    })
                }
            })
        }
    })
    
}
export default mkRSetup