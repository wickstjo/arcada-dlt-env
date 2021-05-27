// DEFUALT STATE
const values = {

    // INIT STATUS
    initialized: false,

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