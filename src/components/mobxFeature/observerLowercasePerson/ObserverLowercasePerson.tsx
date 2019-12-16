import * as React from "react";
import {observer, useLocalStore} from 'mobx-react-lite' // 6.x or mobx-react-lite@1.4.0

const ObserverLowercasePerson: React.FC<any> = observer(() => {
    const person = useLocalStore(() => ({name: 'John'}));
    return (
        <div>
            <div>The name is: {person.name}</div>
            <button onClick={() => (person.name = 'Mike')}>
                Change name
            </button>
        </div>
    )
})

export default ObserverLowercasePerson;