import * as React from "react";
import {useObserver, useLocalStore} from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0

function UserObserverPerson() {
    console.log('in useObserverPerson');
    const person = useLocalStore(() => ({name: 'John'}))
    return useObserver(() => (
        <div>
            <div>The name is: {person.name}</div>
            <button onClick={() => (person.name = 'Mike')}>Change name</button>
        </div>
    ))
}

export default UserObserverPerson;