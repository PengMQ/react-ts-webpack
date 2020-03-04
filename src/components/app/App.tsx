import * as React from 'react';
import {IntlProvider, FormattedMessage, FormattedDate, FormattedTime, FormattedNumber, FormattedNumberParts} from "react-intl";
import './App.scss'
const App = () => {
    const locale = navigator.language.split('-')[0];
    let messages = {
        en: {
            greeting: 'Hello',
            date: "The date is {d, date}.",
            time: "The time is {t, time, short}."
        },
        zh: {
            greeting: "你好",
            date: "今天是: {d, date}。",
            time: "现在的时间是: {t, time, short}。"
        }
    };
    return (
        <>
            <div>******************************en英文**********************************</div>
            <IntlProvider locale={'en'} key={'en'} messages={messages['en']}>
                <div><FormattedMessage id="greeting"/></div>
                <div>------------------------时间格式化------------------------</div>
                <div><FormattedMessage id="date" values={{d: Date.now()}}/></div>
                <div>t<FormattedMessage id="time" values={{t: Date.now()}}/></div>
                <div>FormattedDate:
                    <FormattedDate
                        value={Date.now()}
                        year="numeric"
                        month="long"
                        day="2-digit"
                    /></div>
                <div>FormattedTime:
                    <FormattedTime value={ Date.now()} />
                </div>
                <div>------------------------数字格式化------------------------</div>
                <div>FormattedNumber:
                    <FormattedNumber
                        value={1000}
                        style="unit"
                        unit="kilobyte"
                        unitDisplay="narrow"
                    />
                </div>
                <div>FormattedNumberParts:
                    <FormattedNumberParts value={1000}>
                        {parts => (
                            <>
                                <b>{parts[0].value}</b>
                                {parts[1].value}
                                <small>{parts[2].value}</small>
                            </>
                        )}
                    </FormattedNumberParts>
                </div>
                <div>------------------------钱的格式化------------------------</div>
                <div>
                    <FormattedNumber
                        value={1000}
                        style="currency"
                        currency={'USD'} />
                </div>
            </IntlProvider>
            <div>******************************zh中文**********************************</div>
            <IntlProvider locale={'zh'} key={'zh'} messages={messages['zh']}>
                <div><FormattedMessage id="greeting"/></div>

                <div>------------------------时间格式化------------------------</div>
                <div><FormattedMessage id="date" values={{d: Date.now()}}/></div>
                <div><FormattedMessage id="time" values={{t: Date.now()}}/></div>
                <div>FormattedDate:
                    <FormattedDate
                        value={Date.now()}
                        year="numeric"
                        month="long"
                        day="2-digit"
                    /></div>
                <div>FormattedTime:
                    <FormattedTime value={ Date.now()} />
                </div>

                <div>------------------------数字格式化------------------------</div>
                <div>FormattedNumber:
                    <FormattedNumber
                        value={1000}
                        style="unit"
                        unit="kilobyte"
                        unitDisplay="narrow"
                    />
                    <div>FormattedNumberParts:
                        <FormattedNumberParts value={1000}>
                            {parts => (
                                <>
                                    <b>{parts[0].value}</b>
                                    {parts[1].value}
                                    <small>{parts[2].value}</small>
                                </>
                            )}
                        </FormattedNumberParts>
                    </div>
                    <div>------------------------钱的格式化------------------------</div>
                    <div>
                        <FormattedNumber
                            value={1000}
                            style="currency"
                            currency={'CNY'} />
                    </div>
                </div>
            </IntlProvider>
        </>
    );

};

export default App;