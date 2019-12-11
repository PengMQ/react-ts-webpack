import * as React from "react";

import {todoItemInterface} from '../../types/types'

export const TodoItem: React.FC<todoItemInterface> = function ({id, text, completed}) {
    return (
        <div
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >{text}</div>
    )
};



