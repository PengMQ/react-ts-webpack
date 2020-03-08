import * as React from "react";
import {render, waitForElement} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Profile from "./profle";
import axios from 'axios';

//jest.mock(...) function to automatically mock the axios API fire, and it must put in the level with import
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('loading text should hide and user name should show after get profile data successfully from server ', async () => {
    //mock the API response using axiosMock it's own API and the mock should run before the render()
    mockedAxios.get.mockResolvedValueOnce({data: {data: {username: 'nana'}}});
    const {getByTestId, container, getByText} = render(<Profile/>);
    // awaiting for sync function to be done with  await waitForElement()
    const [loadingText, username] = await waitForElement(
        () => [
            getByTestId('loading-text'),
            getByTestId('username'),
        ],
        { container }
    );
    //assert dom changes
    expect(loadingText).toHaveTextContent('');
    expect(username).toHaveTextContent('nana');

});
test('loading text should hide and error message should show after get profile data failed', () => {
});
