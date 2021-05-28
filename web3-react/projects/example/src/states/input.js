export default (state, { type, payload }) => {
    switch (type) {

        // UPDATE NAME
        case 'field': {
            return {
                ...state,
                [payload.name]: payload.value
            }
        }

        // RESET EACH INPUT STATE
        case 'reset': {
            Object.keys(state).forEach(key => {
                state[key] = {
                    value: '',
                    status: false
                }
            })
            return state;
        }

        // FALLBACK
        default: {
            console.log('INPUT REDUCER ERROR');
            return state;
        }
    }
}