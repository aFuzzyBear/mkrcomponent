<!--- ${compName}.stories.mdx -->

import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { Checkbox } from './${compName}';

<Meta title="MDX/${compName}" component={${compName}} />

# ${compName}

With `MDX` we can define a story for `${compName}` right in the middle of our
Markdown documentation.

<!--- This is your Story template function, shown here in React -->

export const Template = (args) => <${compName} {...args} />

<Canvas>
  <Story name="Unchecked" args={{ 
      label: 'Unchecked'
    }}>
    {Template.bind({})}
   </Story>
</Canvas>


/**
 * For more information about MDX Story Documents
 * https://storybook.js.org/docs/react/writing-docs/mdx
 */