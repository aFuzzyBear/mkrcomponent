import { Command } from "commander";
import mkRSetup from "../scripts/mkRInit.js";
import { checkConfig, inputValidation } from "./gorbals.js";
import {timer} from './debugger.js'
import mkRComponent from './mkRComp.js'
import { display_success } from "./console.js";
const mkRProgram = new Command()

function order(name){
    let timer = racer(mkRComponent(name))

}

mkRProgram
    .version('1.0.0')
    .arguments('<name...>')
    .description('mkRComponent',{
        name:'Name of the Component'
    })
    .action((name)=>{
        let str = inputValidation(Object.values(name).join(' '))
        return (checkConfig()) ? mkRComponent(str): mkRSetup()
    })
    
    
    
    export default mkRProgram