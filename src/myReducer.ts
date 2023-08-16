
type State = { steps: number };
type Action =
    | { type: 'forward'; steps: number }
    | { type: 'backwards'; steps: number };


function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'forward':
            return { ...state, steps: state.steps + action.steps };
        case 'backwards':
            return { ...state, steps: state.steps - action.steps };
        default:
            return state;
    }
}

export default {}