import React from 'react'
import {useHistory} from 'react-router-dom'

function TimeUP() {
    let history = useHistory();
    return (
        <div>
            {history.push("/results")}
        </div>
    )
}

export default TimeUP
