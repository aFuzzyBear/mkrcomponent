// ${compName}.stories.js
import React, { Suspense } from 'react';
//  Accompanying Companion Stylesheet 
import '/${compName}.css'

// React.lazy() construct
// const OtherComponent = React.lazy(() => import('./OtherComponent'));

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
 */
export const ${compName} = ({/*props*/}) => {
  //Component Scope
  return (
    //JSX goes in here
    // <div>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <OtherComponent />
    //   </Suspense>
    // </div>
  );
}