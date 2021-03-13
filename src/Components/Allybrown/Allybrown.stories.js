// Story - Allybrown.stories.js
import React from 'react';

// Import Component to its own Story
import { Allybrown } from './Allybrown';

// Create a “template” of how args map to rendering
const Template = (args) => <Allybrown {...args} />;

// Default Story metadata
export default {
    title: 'Components/Allybrown',
    component: Allybrown,
  }
  

// Each story then reuses that template
export const Allybrown = Template.bind({});

// Defining stories
export const Primary = () => <Allybrown primary label="Allybrown"/>;


/**
 * Stories are based off the Storybook.js Application format
 * For more information please visit:
 * https://storybook.js.org/docs/react/writing-stories/introduction
 */
