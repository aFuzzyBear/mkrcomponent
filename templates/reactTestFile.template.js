/**
 * Standard React test template 
 * 
 * Utilises ReactDOM's test utilities for more information
 * @see https://reactjs.org/docs/test-utils.html
 */

// Import React Testing Suite
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

// Import component to test
import ${compName} from './${compName}'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(< ${compName} />, container);
  });