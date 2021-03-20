#!/usr/bin/env node
'use strict'
/**
 * @module debugger.js
 * @description A utility file containing debugging functions 
 * That are used in the development of mkRComponent. 
 * This is a named export file.
 * 
 */

/**
 * @exports @function memUsage
 * @description Provides a memory usage summary for the existing node process.
 * Outputs the response to the console in Human Readable format.
 * @returns rss total, heapTotal, heapUsed, external and arrayBuffers 
 * And any other memory stacks that are in use. 
 * @see https://nodejs.org/api/process.html#process_process_memoryusage
 */
export function memUsage(){
    //Obtains the nodejs memory for the entire process
    const used = process.memoryUsage();
    for (let key in used) {
      console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

/**
 * @exports @function racer
 * @param {Function} callback - Accepts a function as a callback argument
 * @description Measures the time in ms of the execution for the callback function. Note only named functions will have their name displayed in the output, otherwise it would return the constructor descriptor.
 * @returns  displays the time for the callback function to execute in the console. 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Console/time
 */
export function racer(callback,name){

    console.time(name)
     callback()
    console.timeEnd(name)
}
