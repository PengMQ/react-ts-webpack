import * as React from 'react';
import {shallow} from "enzyme";

import App from './App';
test('There is an Image in the App component', () => {
    const result = shallow(<App />).contains(<h1>hehe</h1>);
    expect(result).toBeTruthy();
});