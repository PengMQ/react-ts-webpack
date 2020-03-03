import * as React from 'react';
import {IntlProvider} from "react-intl";

const App = () => {
    const locale = 'en';
    let messages = {
        en: {
            greeting: 'Hello',
        },
        zh: {
            greeting: "你好"
        }
    };
    return (
        <>
            <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
                <div>hello</div>
            </IntlProvider>
        </>


    );

};

export default App;