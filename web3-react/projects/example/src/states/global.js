// DEFUALT STATE
const values = {

    // INIT STATUS
    initialized: false,

    // CURRENTLY VIEWED PAGE
    page: 'devices',

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