import * as React from 'react';
import {shallow} from "enzyme";

import App from './App';
test('The title should contain hooks', () => {
    const result = shallow(<App />).contains(<h6>React hooks && Mobx example</h6>);
    expect(result).toBeTruthy();
});