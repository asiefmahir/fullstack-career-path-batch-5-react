export const counterReducer = (state, action) => { // action === {type: 'INCREASE_COUNTER', payload: 1}
    switch (action.type) {
        case 'INCREASE_COUNTER': {
          return state + action.payload
        }

        case 'DECREASE_COUNTER': {
          return state - action.payload
        }

        default: {
          return state
        }
    }
}