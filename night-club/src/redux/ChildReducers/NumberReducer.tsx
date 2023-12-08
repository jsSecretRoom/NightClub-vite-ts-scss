import { NumberReducerStates, NumberAction } from "../TS-STATE";

const initialState: NumberReducerStates = {
    globallCounter: 0,

};

export function NumberReducer(

    state: NumberReducerStates = initialState, 
    action: NumberAction) : NumberReducerStates {

    switch (action.type) {
        case 'FIND_GLOBAL_COUNT':
            return {
                ...state,
                globallCounter: action.payload,
            };
        default:
            return state;
    }
}