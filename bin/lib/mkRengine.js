/**
 * @module mkREngine
 ** 
 **        _     ______  _______             _             
 **       | |   (_____ \(_______)           (_)            
 **  ____ | |  _ _____) )_____   ____   ____ _ ____  _____ 
 ** |    \| |_/ )  __  /|  ___) |  _ \ / _  | |  _ \| ___ |
 ** | | | |  _ (| |  \ \| |_____| | | ( (_| | | | | | ____|
 ** |_|_|_|_| \_)_|   |_|_______)_| |_|\___ |_|_| |_|_____)
 **                                   (_____|              
 *   
 * @description mkR Template Engine.
 * This was required by part of the mkRComponent program because of the way the data from a file is written by the Node File System, it only accepts completed strings. Which made the idea of using ES5 Template literals, to interpolate values parsed when it was writing to the file, unusable. This could only of came about from having a mechanism to parse static files that would then have the ${placeholder}'s within the template swapped with the values we wanted at runtime, before the file was written to disk. 
 * I am extremely grateful to Muesha for presenting this solution. After his very helpful explanation of the problem and his simplistic solution was very insightful. 
 * @see https://stackoverflow.com/a/52818076/13301381
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
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
 * @author aFuzzyBear
 * @see https://github.com/aFuzzyBear/
 */

 /**
 * @exports  mkREngine
 * @param {string} templateString 
 * @param {object} templateVars 
 * Takes a template with object placeholders embedded within, and outputs
 * a transpiled string where the placeholders are filled with their respective 
 * attributes.
 * @see https://stackoverflow.com/a/52818076/13301381
 * @author muesha  @https://stackoverflow.com/users/1930509/muescha 
 * 
 */
export default function mkREngine(templateString, templateVars){
    let func = new Function(...Object.keys(templateVars),  "return `"+templateString +"`;")
    return func(...Object.values(templateVars));
}

