import * as React from "react";
import {useObserver, useLocalStore} from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0

function UserObserverPerson() {
    console.log('in useObserverPerson');
    const person = useLocalStore(() => ({name: 'John'}))
    return useObserver(() => (
        <div>
            {person.name}
            <button onClick={() => (person.name = 'Mike')}>No! I am Mike</button>
        </div>
    ))
}

export default UserObserverPerson;