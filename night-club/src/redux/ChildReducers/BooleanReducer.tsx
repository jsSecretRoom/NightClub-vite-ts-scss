import { BooleanReducerState, BooleanAction } from "../TS-STATE";

const initialState: BooleanReducerState = {
  authorized: false,
};

export function BooleanReducer(
  
  state: BooleanReducerState = initialState, 
  action: BooleanAction) : BooleanReducerState {

  switch (action.type) {
    case 'SUCCESSFUL_AUTHORIZATION':
      return {
        ...state,
        authorized: action.payload,
      };
    default:
      return state;
  }
}