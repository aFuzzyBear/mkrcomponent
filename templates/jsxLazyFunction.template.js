// File Imports Go Here
import React, {} from 'react'
// Component Companion Stylesheet
import '/${compName}.css'

/**
 * ${compName} Component - Lazy
 * 
 * @exports @function ${compName}
 * List of Props
 * @props - {props} -  //Props description
 * List of State Attributes
 * @state {name} - //State Description
 * @description - //Provide a description of the function
 * @example - //Provide an Example of the JSX
 * 
 * For more information on React Lazy Loaded functions
 * @see https://reactjs.org/docs/code-splitting.html#reactlazy
 */

// Lazy load from external component
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
export const ${compName} = ({props}) => {
    //Component Scope
    return(
        //JSX goes in here
        /**
         * <div>
         *     <Suspense fallback={<div>Loading...</div>}>
         *         <OtherComponent />
         *     </Suspense>
         * </div>
         */
    )
}

