import * as React from "react";
import Counter from './counter'
import {render, fireEvent} from '@testing-library/react';

// fireEvent doc: https://testing-library.com/docs/dom-testing-library/api-events

// Please note that THE cleanup is done automatically if the testing framework
// you're using supports the afterEach global (like mocha, Jest, and Jasmine).
// If not, you will need to do manual cleanups after each test.

test('the count should be 1 when you click the increase button once', () => {
    // render
    const {getByTestId} = render(<Counter/>);
    const increaseButton = getByTestId('increase-button');
    // act
    fireEvent.click(increaseButton);
    // assert
    expect(getByTestId('count-announcement').innerHTML.includes('1')).toBeTruthy();
});
