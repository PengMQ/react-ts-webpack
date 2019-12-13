import * as React from "react";
import {Observer, useLocalStore} from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0

export default function ObservePerson() {
    console.log('in Observer');
    const person = useLocalStore(() => ({name: 'John'}))
    return (
        <div>
            The old name is: {person.name}
            <div>
                <Observer>{() => <div>{person.name}</div>}</Observer>
                <button onClick={() => (person.name = 'Mike')}>
                    I want to be Mike
                </button>
            </div>
        </div>
    )
}