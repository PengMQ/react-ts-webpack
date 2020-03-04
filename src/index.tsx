import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/App';
import adaptive from './utils/adaptive/adaptive'
adaptive();
window.onresize = ()=>{
    adaptive();
};
ReactDOM.render(
    <App />,
    document.getElementById("root")
);