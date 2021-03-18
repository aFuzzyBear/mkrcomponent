import inquirer from 'inquirer'


// Options
const options_writing = ['jsx','tsx']
const options_type = ['class','function']
const options_styling = ['css','sass']
const options_yesNo = ['yes','no']
// Setup Prompts
export const questionnaire = inquirer.createPromptModule()
// Questions
export const questions_setup = [
    {
        name:'Run',
        type:'list',
        message:'Do you wish to Run the Initialisation Setup?',
        choices:options_yesNo,
        default:'yes'
    },
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
    {
        name:'Run',
        type:'list',
        message:'Do you wish to Run the Initialisation Setup?',
        choices:['yes','no'],
        default:'yes'
    }
    
]
