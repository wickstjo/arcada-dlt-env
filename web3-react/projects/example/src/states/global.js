// DEFUALT STATE
const values = {

    // INIT STATUS
    initialized: false,

    // CURRENTLY VIEWED PAGE
    page: 'devices',

    // REDIRECT PARAMS
    redirect: {
        status: false,
        location: ''
    },

    // BLOCKCHAIN PARAMS
    web3: null,
    contracts: null,
    keys: {
        public: '',
        private: ''
    },
}

// STATE REDUCER
function reducer(state, { type, payload }) {
    switch (type) {

        // INITIALIZE
        case 'init': { return {
            ...state,
            ...payload,
            initialized: true
        }}

        // SET PAGE
        case 'set-page': { return {
            ...state,
            page: payload
        }}

        // REDIRECT TO PAGE
        case 'redirect': { return {
            ...state,
            redirect: {
                status: true,
                location: payload
            }
        }}

        // RESET REDIRECT LOGIC
        case 'reset-redirect': { return {
            ...state,
            redirect: {
                status: false,
                location: ''
            }
        }}

        // FALLBACK
        default: {
            console.log('CONTEXT REDUCER TYPE NOT FOUND');
            return state;
        }
    }
}

export {
    values,
    reducer
}