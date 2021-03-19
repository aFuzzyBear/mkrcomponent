#!/bin/env node
/**
 * @module Buffer
 * @description Export Module which contains all the related buffer usage and functionality that is needed for the mkRComponent
 */
 

// Imports
const reader = await import( './mkRreader.js')


/**
 * @async templateBuffer
 * @param {String} path - Path of directory to read from
 * @param {String} fileName - File Name of the Template to be read
 * @param {Object} placeholders - Placeholders that are needed for the template engine to interpolate the values
 * @returns a string from reading the file from a template, where the values have already been interpolated by the mkR Template Engine.
 */
async function templateBuffer(path,fileName,placeholders){
    return await reader.readFromTemplate(path,fileName,placeholders)
}

/**
 * @async fileBuffer
 * @param {String} path - Path of the file to be read from
 * @param {String} fileName - Name of the file to be read
 * @returns A String from reading the file directly from a location.
 */
async function fileBuffer(path,fileName){
    return await reader.readFromFile(path,fileName)
}

/**
 * @async objectBuffer
 * @param {Object} object - Data Object 
 * @returns String from an object by taking an object and Stringifies it using JSON.stringify
 */
async function objectBuffer(object){
    return JSON.stringify(object,null,2)
}

/**
 * @exports templateBuffer
 * @exports fileBuffer
 * @exports objectBuffer
 */
export {templateBuffer,fileBuffer,objectBuffer}

