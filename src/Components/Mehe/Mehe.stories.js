// Story - Mehe.stories.js
import React from 'react';

// Import Component to its own Story
import { Mehe } from './Mehe';

// Create a “template” of how args map to rendering
const Template = (args) => <Mehe {...args} />;

// Default Story metadata
export default {
    title: 'Components/Mehe',
    component: Mehe,
  }
  

// Each story then reuses that template
export const Mehe = Template.bind({});

// Defining stories
export const Primary = () => <Mehe primary label="Mehe"/>;


/**
 * Stories are based off the Storybook.js Application format
 * For more information please visit:
 * https://storybook.js.org/docs/react/writing-stories/introduction
 */
