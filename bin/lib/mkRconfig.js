#!/bin/env node
/**
 * 
 * 
 **         _     ______ _______              ___ _       
 **        | |   (_____ (_______)            / __|_)      
 **   ____ | |  _ _____) )       ___  ____ _| |__ _  ____ 
 **  |    \| |_/ )  __  / |     / _ \|  _ (_   __) |/ _  |
 **  | | | |  _ (| |  \ \ |____| |_| | | | || |  | ( (_| |
 **  |_|_|_|_| \_)_|   |_\______)___/|_| |_||_|  |_|\___ |
 **                                                (_____|
 * 
 * 
 */


import {doesExist} from './gorbals.js'

// const doesExist = require('./gorbals');
 class mkRConfig{
    //  Declaring Private Variables
   /**@private @this this.#jsx @type {Boolean}- Sets JSX writing style */
    #jsx;
    /**@private @this this.#tsx @type {Boolean} - Sets TSX writing style */
    #tsx;
    /**@private @this this.#css @type {Boolean} - Sets CSS styling */
    #css;
    /**@private @this this.#sass @type {Boolean} - Sets SASS styling */
    #sass;
    /**@private @this this.#test @type {Boolean} - Sets Test File */
    #test;
    /**@private @this this.#story @type {Boolean} - Sets Story File */
    #story;
    /**@private @this this.#doc @type {Boolean} - Sets Documentation */
    #doc;
    /**@private @this this.#class @type {Boolean} - Sets Component Class */
    #class;
    /**@private @this this.#func @type {Boolean} - Sets Component function */
    #func;
    constructor(){
        // Primitives
        this.#jsx 
        this.#tsx  
        this.#class
        this.#func
        this.#css 
        this.#sass 
        this.#test
        this.#story
        this.#doc
        // Preferences
        this.prefWriting
        this.prefType
        this.prefStyle
        this.prefStory
        this.prefTest
        this.prefDoc
        // Routes
        this.routes={
            a : '',
            b : '',
        }


    }
    //Getters Primitives
    /**@this this.getJSX @readonly - Returns value for JSX*/
    get getJSX(){
       return this.#jsx
    }
     /**@this this.getTSX @readonly - Returns value for TSX*/
    get getTSX(){
        return this.#tsx
    }
    /**@this this.getCLASS @readonly - Returns value for CLASS*/
    get getCLASS(){
        return this.#class
    }
    /**@this this.getFUNC @readonly - Returns value for FUNCTION*/
    get getFUNC(){
        return this.#func
    }
     /**@this this.getCSS @readonly - Returns value for CSS*/
    get getCSS(){
        return this.#css
    }
     /**@this this.getSASS @readonly Returns value for SASS*/
    get getSASS(){
        return this.#sass
    }
    /**@this this.getTEST @readonly Returns value for TEST*/
    get getTEST(){
        return this.#test
    }
    /**@this this.getSTORY @readonly Returns value for STORY*/
    get getSTORY(){
        return this.#story
    }
    /**@this this.getDOC @readonly Returns value for DOC*/
    get getDOC(){
        return this.#doc
    }
    //Getters Prefs

    // Setters - Private Primitives 
    /**@private @this this.setJSX - sets value for JSX */
    set #setJSX(/**@type {boolean} */boolean){
         this.#jsx = boolean
    }
    /**@private @this this.setTSX - sets value for TSX */
    set #setTSX(/**@type {boolean} */boolean){
         this.#tsx = boolean
    }
    /**@private @this this.setCLASS - sets value for CLASS */
    set #setCLASS(/**@type {boolean} */boolean){
         this.#class = boolean
    }
    /**@private @this this.setFUNC - sets value for FUNCTION */
    set #setFUNC(/**@type {boolean} */boolean){
         this.#func = boolean
    }
    /**@private @this this.setCSS - sets value for CSS */
    set #setCSS(/**@type {boolean} */ boolean){
         this.#css = boolean
    }
    /**@private @this this.setSASS - sets value for SASS */
    set #setSASS(/**@type {boolean} */ boolean){
         this.#sass = boolean
    }
    /**@private @this this.setTEST - sets value for TEST */
    set #setTEST(/**@type {boolean} */ boolean){
         this.#test = boolean
    }
    /**@private @this this.setSTORY - sets value for STORY */
    set #setSTORY(/**@type {boolean} */ boolean){
         this.#story = boolean
    }
    /**@private @this this.setDOC - sets value for DOC */
    set #setDOC(/**@type {boolean} */ boolean){
         this.#doc = boolean
    } 
   
    /**@private @this this.setWriting - sets the WRITING values depending argument passed*/
    set #setWriting(/**@type {string}*/value){
        try {
            switch (value.toLowerCase()) {
                case 'jsx':
                    this.#setJSX = true
                    this.#setTSX = false
                    this.prefWriting = 'jsx'//TODO:Change this to the setter
                    break;
                case 'tsx':
                    this.#setTSX = true
                    this.#setJSX = false
                    this.prefWriting = 'tsx' //TODO:Change this to the setter                   
                    break
                default:
                    throw new SyntaxError(`Config.SetWriting:Wrong argument entered: ${value} `)
                    
                }
                this.checkPrefs(this.#jsx,this.#tsx)
                console.log(`User Writing preference set to: ${this.prefWriting}`)

        } catch (error) {
            console.error('Error located within Config.setWriting:'+error);
        }

    }
    /**@private @this this.setStyling - sets the STYLING values depending on argument passed */
    set #setStyling(/**@type {String} */value){
        try {
            switch (value.toLowerCase()) {
                case 'css':
                this.#setCSS = true
                this.#setSASS = false
                this.prefStyle = 'css'//TODO:Change this to the setter
                break;
                case 'sass':
                this.#setSASS = true
                this.#setCSS = false
                this.prefStyle = 'sass'//TODO:Change this to the setter
                break;
                default:
                throw new SyntaxError(`Config.SetStyling:Wrong argument entered: ${value} `)
            }
            this.checkPrefs(this.#css,this.#sass)
            console.log(`User Styling preference set to: ${this.prefStyle}`)
        } catch (error) {
            console.error('Error located within Config.setStyling: '+error);
        }
    }
    /**@private @this this.setTesting - sets the TEST values depending on arguments passed */
    set #setTesting(/**@type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'yes':
                case 'y':
                    this.#setTEST = true 
                    this.prefTest = 'yes'   //TODO:Change this to the setter
                    break;
                case 'no':
                case 'n':
                    this.#setTEST = false
                    this.prefTest = 'no'   //TODO:Change this to the setter
                    break
                default:
                    throw new SyntaxError(`Config.setTesting: Wrong argument entered ${string}`)
            }
            console.log(`User Testing preference set to: ${this.prefTest}`)
        } catch (error) {
            console.error('Error located within Config.setTest: '+error);
        }
    }
    set #setDocumentation(/**@type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'yes':
                case 'y':
                    this.#setDOC = true
                    this.prefDoc = 'yes'    //TODO:Change this to the setter
                    break;
                case 'no':
                case 'n':
                    this.#setDOC = false
                    this.prefDoc = 'yes'//TODO:Change this to the setter
                    break
                default:
                    throw new SyntaxError(`Config.setDocumentation: Wrong argument entered ${string}`)
            }
            console.log(`User Documentation preference set to: ${this.prefDoc}`)
        } catch (error) {
            console.error('Error located within Config.setDocumentation: '+error);
        }
    }
    set #setStorybook(/**@type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'yes':
                case 'y':
                    this.#setSTORY = true 
                    this.prefStory = 'yes'   //TODO:Change this to the setter
                    break;
                case 'no':
                case 'n':
                    this.#setSTORY = false
                    this.prefStory = 'no'//TODO:Change this to the setter
                    break
                default:
                    throw new SyntaxError(`Config.setStorybook: Wrong argument entered ${string}`)
            }
            console.log(`User Story Components preference set to: ${this.prefStory}`)
        } catch (error) {
            console.error('Error located within Config.setTest: '+error);
        }
    }
    set #setCompType(/** @type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'function':
                    case 'func':
                       case 'f':
                            this.#setFUNC = true
                            this.#setCLASS = false
                            this.prefType = 'function'//TODO:Change this to the setter
                    break;
                    case 'class':
                        case 'c':
                            this.#setCLASS = true
                            this.#setFUNC = false
                            this.prefType = 'function'//TODO:Change this to the setter

                    break
                default:
                    throw new SyntaxError(`Config.setCompType: Wrong argument entered ${string}`)
            }
            
            console.log(`User Component Type preference set to: ${string}`)
        } catch (error) {
            console.error(error)
        }
    }

    // Public Setter Accessor Methods 

    /**@public @this this.setPrefWriting - Sets the Writing Style: JSX || TSX */
    set setPrefWriting(/**@type {String} */ string){
        this.#setWriting = string
    }
    /**@public @this this.setPrefType - Sets the Component Type: Class || Function */
    set setPrefType(/**@type {String} */ string){
        this.#setCompType = string
    }
    /**@public @this this.setPrefStyling - Sets the User Preference for Styling: CSS || SASS */
    set setPrefStyling(/**@type {String} */ string){
        this.#setStyling = string
    }
    /**@public @this this.setPrefTests - Sets the User Preference for including React Tests: (Y)es/(N)o*/
    set setPrefTests(/**@type {String} */ string){
        this.#setTesting = string
    }
    /**@public @this this.setPrefDocs - Sets the User Preference for including Documentation: (Y)es/(N)o */
    set setPrefDocs(/**@type {String} */ string){
        this.#setDocumentation = string
    }
    /**@public @this this.setPrefStories - Sets the User Preference for including Stories: (Y)es/(N)o */
    set setPrefStories(/**@type {String} */ string){
        this.#setStorybook = string
    }
    // Methods
    
    checkPrefs(prefA,prefB){
        
        function check(prefA,prefB){
            if(prefA && !prefB || prefB && !prefA ) return 1
            if(prefA && prefB || !prefA && !prefB) return 0
        }
        if(check(prefA,prefB) === 1) return 
        if(check(prefA,prefB) === 0) throw new TypeError('`Error, Both Preferences are the same, has to be either or, not equals.`') 
    }
    exports(){
        return {
            jsx : (doesExist(this.getJSX)) ? this.getJSX : 'n/a',
            tsx : (doesExist(this.getTSX)) ? this.getTSX : 'n/a',
            class: (doesExist(this.getCLASS)) ? this.getCLASS : 'n/a',
            function: (doesExist(this.getFUNC)) ? this.getFUNC : 'n/a',            
            css : (doesExist(this.getCSS)) ? this.getCSS : 'n/a',
            sass : (doesExist(this.getSASS))?  this.getSASS : 'n/a',
            test : (doesExist(this.getTEST))? this.getTEST :'n/a',
            docs : (doesExist(this.getDOC))? this.getDOC : 'n/a',
            story : (doesExist(this.getSTORY))? this.getSTORY : 'n/a',

        }
        
    }
 }




 let config = new mkRConfig()

 config.setPrefWriting='tsx'
 config.setPrefStyling='sass'
 config.setPrefTests ='No'
 config.setPrefStories='Yes'
 config.setPrefDocs ='no'
console.log(config.exports());

// console.log(process.versions);