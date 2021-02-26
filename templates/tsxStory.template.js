// ${compName}.stories.tsx
import React from 'react';

import { Meta } from '@storybook/react';
// Import Component to its own Story
import { ${compName}, ${compName}Props } from './${compName}';

// Export metadata controls how Storybook lists your stories and provides information used by addons
export default {
  title: 'Components/${compName}',
  component: Button,
} as Meta;

// Create a “template” of how args map to rendering
const Template: Story<${compName}Props> = (args) => <${compName} {...args} />;

// Each story then reuses that template
export const Primary: React.VFC<{}> = () => <${compName} primary>Button</${compName}>;

/**
 * Stories are based off the Storybookjs Application format
 * For more information please visit:
 * https://storybook.js.org/docs/react/writing-stories/introduction
 */
