/**
 **         _     ______ _______                       _        
 **        | |   (_____ (_______)                     | |       
 **   ____ | |  _ _____) )       ___  ____   ___  ___ | | _____ 
 **  |    \| |_/ )  __  / |     / _ \|  _ \ /___)/ _ \| || ___ |
 **  | | | |  _ (| |  \ \ |____| |_| | | | |___ | |_| | || ____|
 **  |_|_|_|_| \_)_|   |_\______)___/|_| |_(___/ \___/ \_)_____)
 **                                                             
 ** 
 *
 *
 **    _     _   
 **   (c).-.(c)  
 **    / ._. \   
 **  __\( Y )/__  created by:
 ** (_.-/'-'\-._)    _         _ 
 **    ||   ||    _.|_  _ _   |_) _  _.._
 **  _.' `-' '._ (_|||_|/_/_\/|_)(/_(_||  
 ** (.-./`-'\.-.)           /        
 **  `-'     `-'   
 */

import fgColours from './mkRConsole-Files/consoleFGColors_256.js'
import bgColours from './mkRConsole-Files/consoleBGColors_256.js'
import effects from './mkRConsole-Files/consoleEffects.js'

export const console_colours = {
    effects:{
        ...effects
    },
    fgColours:{
        ...fgColours
    },
    bgColours:{
        ...bgColours
    }
}
// console.log(console_colours);

export default function mkRConsole(bgColor='',fgColor='',effect='',...args){
    return console.log(bgColor + fgColor + effect + args + console_colours.effects.Reset)
}
// Object.entries(console_colours.bgColours).forEach(item => {
//     let [name,value] = item
//     console.log(name,value)
    
// });
// Object.entries(console_colours.fgColours).forEach(item => {
//         let [name,value] = item
//     console.log(name,value)
// });

const sum = x => (y=0) => (...z) => +x + +y + +z.reduce((prev,curr)=>prev+curr,0)
mkRConsole(sum(2)(10)(10,10,10,10,10,10,12))
