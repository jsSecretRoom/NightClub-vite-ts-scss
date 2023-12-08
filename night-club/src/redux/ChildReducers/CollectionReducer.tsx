import { CollectionReducerState, CollectionAction } from "../TS-STATE";

const initialState: CollectionReducerState = {
  collectionsName: [],

};
 
export function CollectionReducer(

  state: CollectionReducerState = initialState, 
  action: CollectionAction ) : CollectionReducerState {
    
  switch (action.type) {
    case 'GET_COLLECTION_NAME':
      return {
        ...state,
        collectionsName: action.payload,
      };
    default:
      return state;
  }
}