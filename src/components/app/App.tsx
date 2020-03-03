import * as React from 'react';
import {IntlProvider, FormattedMessage} from "react-intl";

const App = () => {
    const locale = 'en';
    let messages = {
        en: {
            greeting: 'Hello',
            time: "The time is {t, time, short}.",
            date: "The date is {d, date}."
        },
        zh: {
            greeting: "你好",
            time: "现在的时间是 {t, time, short}.",
            date: "今天是 {d, date}."
        }
    };
    return (
        <>
            <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
                <div><FormattedMessage id="greeting"/></div>
                <div><FormattedMessage id="date" values={{ d: Date.now() }} /></div>
                <div><FormattedMessage id="time" values={{ t: Date.now() }} /></div>
            </IntlProvider>
        </>
    );

};

export default App;