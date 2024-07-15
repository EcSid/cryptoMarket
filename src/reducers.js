export function reducerTime(stateTime, action) {
    switch (action.type) {
        case 'newTime':
            return {
                time: new Date()
            }
        default:
            return state
    }
}

