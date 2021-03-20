#!/usr/bin/env node
'use strict'
/**
 * @module mkRConfig
 * @description This is the configuration file that the application uses. Here we are setting up a single parent object that would reflect the user settings to the internals of the application allowing the application then to process the information accordingly
 */

const {display_error, display_success} = await import('./console.js')
const {doesExist} = await import('./gorbals.js')
const {writeJSObjToFile} = await import ('./mkRWriter.js')


/**
 * @exports mkRConfig
 * @class 
 * @classdesc 
 * This parent object creates a boolean list of properties that are flags to determine which files to make and which to ignore. This would also reflect the user settings to the internal application, and it would create a user config file which would reflect those values created during the setup process
 */
export default class mkRConfig{
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
            components :'src/Components',
            templates :'templates/Components',
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
    /**@this this.getPrefWriting @readonly Returns value for WRITING Preference*/
    get getPrefWriting(){
        return this.prefWriting
    }
    /**@this this.getPrefType @readonly Returns value for TYPE Preference*/
    get getPrefType(){
        return this.prefType
    }
    /**@this this.getPrefStyle @readonly Returns value for STYLE Preference*/
    get getPrefStyle(){
        return this.prefStyle
    }
    /**@this this.getPrefStory @readonly Returns value for STORY Preference*/
    get getPrefStory(){
        return this.prefStory
    }
    /**@this this.getPrefTest @readonly Returns value for TEST Preference*/
    get getPrefTest(){
        return this.prefTest
    }
    /**@this this.getPrefDoc @readonly Returns value for DOC Preference*/
    get getPrefDoc(){
        return this.prefDoc
    }
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
   
    /**@private @this this.setPrefWriting  Returns value for WRITING Preference*/
    set #setPrefWriting(/**@type {String} */string){
        return this.prefWriting = string
    }
    /**@private @this this.setPrefType  Returns value for TYPE Preference*/
    set #setPrefType(/**@type {String} */string){
        return this.prefType = string
    }
    /**@private @this this.setPrefStyle  Returns value for STYLE Preference*/
    set #setPrefStyle(/**@type {String} */string){
        return this.prefStyle = string
    }
    /**@private @this this.setPrefStory  Returns value for STORY Preference*/
    set #setPrefStory(/**@type {String} */string){
        return this.prefStory = string
    }
    /**@private @this this.setPrefTest  Returns value for TEST Preference*/
    set #setPrefTest(/**@type {String} */string){
        return this.prefTest = string
    }
    /**@private @this this.setPrefDoc  Returns value for DOC Preference*/
    set #setPrefDoc(/**@type {String} */string){
        return this.prefDoc = string
    }


    /**@private @this this.setWriting - sets the WRITING values depending argument passed*/
    set #setWriting(/**@type {string}*/value){
        try {
            switch (value.toLowerCase()) {
                case 'jsx':
                    this.#setJSX = true
                    this.#setTSX = false
                    this.#setPrefWriting = 'jsx'
                    break;
                case 'tsx':
                    this.#setTSX = true
                    this.#setJSX = false
                    this.#setPrefWriting = 'tsx'                    
                    break
                default:
                    throw new SyntaxError(`Wrong argument entered: ${value} `)
                    
                }
                this.checkPrefs(this.#jsx,this.#tsx)

        } catch (error) {
            display_error('Error located within Config.setWriting:'+error);
        }

    }
    /**@private @this this.setStyling - sets the STYLING values depending on argument passed */
    set #setStyling(/**@type {String} */value){
        try {
            switch (value.toLowerCase()) {
                case 'css':
                this.#setCSS = true
                this.#setSASS = false
                this.#setPrefStyle = 'css'
                break;
                case 'sass':
                this.#setSASS = true
                this.#setCSS = false
                this.#setPrefStyle = 'sass'
                break;
                default:
                throw new SyntaxError(`Wrong argument entered: ${value} `)
            }
            this.checkPrefs(this.#css,this.#sass)
            
        } catch (error) {
            display_error('Error located within Config.setStyling: '+error);
        }
    }
    /**@private @this this.setTesting - sets the TEST values depending on arguments passed */
    set #setTesting(/**@type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'yes':
                case 'y':
                    this.#setTEST = true 
                    this.#setPrefTest = 'yes'   
                    break;
                case 'no':
                case 'n':
                    this.#setTEST = false
                    this.#setPrefTest = 'no'   
                    break
                default:
                    throw new SyntaxError(`Wrong argument entered ${string}`)
            }
           
        } catch (error) {
            display_error('Error located within Config.setTest: '+error);
        }
    }
    /**@private @this this.setDocumentation - sets the DOCS values depending on arguments passed */
    set #setDocumentation(/**@type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'yes':
                case 'y':
                    this.#setDOC = true
                    this.#setPrefDoc = 'yes'    
                    break;
                case 'no':
                case 'n':
                    this.#setDOC = false
                    this.#setPrefDoc = 'no'
                    break
                default:
                    throw new SyntaxError(`Wrong argument entered ${string}`)
            }
        } catch (error) {
            display_error('Error located within Config.setDocumentation: '+error);
        }
    }
    /**@private @this this.setStorybook - sets the STORY values depending on arguments passed */
    set #setStorybook(/**@type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'yes':
                case 'y':
                    this.#setSTORY = true 
                    this.#setPrefStory = 'yes'   
                    break;
                case 'no':
                case 'n':
                    this.#setSTORY = false
                    this.#setPrefStory = 'no'
                    break
                default:
                    throw new SyntaxError(`Wrong argument entered ${string}`)
            }
        } catch (error) {
            display_error('Error located within Config.setTest: '+error);
        }
    }
    /**@private @this this.setCompType - sets the TYPE values depending on arguments passed */
    set #setCompType(/** @type {String} */ string){
        try {
            switch (string.toLowerCase()) {
                case 'function':
                    case 'func':
                       case 'f':
                            this.#setFUNC = true
                            this.#setCLASS = false
                            this.#setPrefType = 'function'
                    break;
                    case 'class':
                        case 'c':
                            this.#setCLASS = true
                            this.#setFUNC = false
                            this.#setPrefType = 'class'

                    break
                default:
                    throw new SyntaxError(`Wrong argument entered ${string}`)
            }
            
        } catch (error) {
            display_error('Error located within Config.setComp: '+error)
        }
    }

    // Public Setter Accessor Methods 

    /**@public @this this.setWriting - Sets the Writing Style: JSX || TSX */
    set setWriting(/**@type {String} */ string){
        this.#setWriting = string
    }
    /**@public @this this.setType - Sets the Component Type: Class || Function */
    set setType(/**@type {String} */ string){
        this.#setCompType = string
    }
    /**@public @this this.setStyling - Sets the User Preference for Styling: CSS || SASS */
    set setStyling(/**@type {String} */ string){
        this.#setStyling = string
    }
    /**@public @this this.setTests - Sets the User Preference for including React Tests: (Y)es/(N)o*/
    set setTests(/**@type {String} */ string){
        this.#setTesting = string
    }
    /**@public @this this.setDocs - Sets the User Preference for including Documentation: (Y)es/(N)o */
    set setDocs(/**@type {String} */ string){
        this.#setDocumentation = string
    }
    /**@public @this this.setStories - Sets the User Preference for including Stories: (Y)es/(N)o */
    set setStories(/**@type {String} */ string){
        this.#setStorybook = string
    }
    // Methods
    /**
     * @method CheckPrefs
     * @param {Boolean} prefA 
     * @param {Boolean} prefB 
     * @throws {TypeError} if both preferences are the same
     */
    checkPrefs(prefA,prefB){
        
        function check(prefA,prefB){
            if(prefA && !prefB || prefB && !prefA ) return 1
            if(prefA && prefB || !prefA && !prefB) return 0
        }
        if(check(prefA,prefB) === 1) return 
        if(check(prefA,prefB) === 0) throw new TypeError('`Error, Both Preferences are the same, has to be either or, not equals.`') 
    }
    /**
     * @method exportConfig
     * @returns Writes a User Configuration File to the disk with the user settings 
     */
    exportConfig(){
        let exp = {
            writing:{
                preference:(doesExist(this.getPrefWriting))? this.getPrefWriting : 'false',
                type:(doesExist(this.getPrefType)) ? this.getPrefType : 'false',
            },
            styling:{
                preference:(doesExist(this.getPrefStyle)) ? this.getPrefStyle : 'false',
            },
            testing:{
                preference:(doesExist(this.getPrefTest)) ? this.getPrefTest : 'false',
            },
            documentation:{
                preference:(doesExist(this.getPrefDoc)) ? this.getPrefDoc : 'false',
              
            },
            storytelling:{
                preference:(doesExist(this.getPrefStory))? this.getPrefStory : 'false',
            },
        }
         return writeJSObjToFile('./mkR.config.js',exp,'mkR')
            .then(display_success('mkR User Config File has been successfully created at: \'./mkR.config.js\''))
          
    }
    /**
     * @method exportInternals
     * @returns Object file containing the programs settings
     */
    exportInternals(){
        return {
            writing:{
                preference:(doesExist(this.getPrefWriting))? this.getPrefWriting : 'false',
                jsx : (doesExist(this.getJSX)) ? this.getJSX : 'false',
                tsx : (doesExist(this.getTSX)) ? this.getTSX : 'false',
                type:(doesExist(this.getPrefType)) ? this.getPrefType : 'false',
                class: (doesExist(this.getCLASS)) ? this.getCLASS : 'false',
                function: (doesExist(this.getFUNC)) ? this.getFUNC : 'false',            

            },
            styling:{
                preference:(doesExist(this.getPrefStyle)) ? this.getPrefStyle : 'false',
                css : (doesExist(this.getCSS)) ? this.getCSS : 'false',
                sass : (doesExist(this.getSASS))?  this.getSASS : 'false',
            },
            testing:{
                preference:(doesExist(this.getPrefTest)) ? this.getPrefTest : 'false',
                test : (doesExist(this.getTEST))? this.getTEST :'false',
            },
            documentation:{
                preference:(doesExist(this.getPrefDoc)) ? this.getPrefDoc : 'false',
                docs : (doesExist(this.getDOC))? this.getDOC : 'false',
            },
            storytelling:{
                preference:(doesExist(this.getPrefStory))? this.getPrefStory : 'false',
                story : (doesExist(this.getSTORY))? this.getSTORY : 'false',
            },
            routes:{
                component: this.routes.components,
                templates: this.routes.templates
            }
            
        }
    }
    /**
     * @method interface
     * @param {Object} us - User Settings 
     * @description Reads the user configuration object and extrapolates the values and sets the new values within the object to reflect those settings.
     */
    interface(us){
        this.setWriting = us.writing.preference
        this.setType = us.writing.type
        this.setStyling = us.styling.preference
        this.setTests = us.testing.preference
        this.setDocs = us.documentation.preference
        this.setStories = us.storytelling.preference

    }
 }




 
