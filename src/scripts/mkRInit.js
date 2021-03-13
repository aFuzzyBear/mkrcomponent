import mkRConfig from "./mkRconfig.js";
import inquirer from 'inquirer'

// Setup Prompts
const prompt_init = inquirer.createPromptModule()

// Options
const options_writing = ['jsx','tsx']
const options_type = ['class','function']
const options_styling = ['css','sass']
const options_yesNo = ['yes','no']

// Questions
const questions_setup = [
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
const questions_exit=[
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


let userSetup = new mkRConfig()

function mkRSetup(){
    prompt_init(questions_setup).then(answers=>{
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
            userSetup.exportConfig().then(console.log('Setup Configuration has been successfully saved:  ')).catch(err=>console.error(err))
        }
        else if(answers.save === 'no'){
            inquirer.prompt(questions_exit[0]).then(ans=>{
                if(ans.restart === 'yes'){
                   return prompt_init(questions_setup)
                }
                else if(ans.restart === 'no'){
                    inquirer.prompt(questions_exit[1]).then(res=>{
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