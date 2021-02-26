// ${compName}.stories.js
import React from 'react';
// Import Component to its own Story
import { ${compName} } from './${compName}';
//👇 We create a “template” of how args map to rendering
const Template = (args) => <${compName} {...args} />;
//Default Story metadata
export default {
    title: 'Components/${compName}',
    component: ${compName},
  }
  
//👇 Each story then reuses that template
export const ${compName} = Template.bind({});
/**
 * Stories are based off the Storybookjs Application format
 * For more information please visit:
 * https://storybook.js.org/docs/react/writing-stories/introduction
 */
