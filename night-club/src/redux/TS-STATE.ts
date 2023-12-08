//-----TS-Interfase-----//

//BooleanReducer-----------------------------------------------------------------------BooleanReducer
export interface BooleanReducerState {
    authorized: boolean,

}

export type BooleanAction =
| { type: 'SUCCESSFUL_AUTHORIZATION'; payload: boolean }


//NumberReducer------------------------------------------------------------------------NumberReducer
export interface NumberReducerStates {
    globallCounter: number,

};

export type NumberAction =
| { type: 'FIND_GLOBAL_COUNT'; payload: number }


//StringReducer-----------------------------------------------------------------------StringReducer
export interface StringReducerStates {
    globalSearchRequest: string,
};

export type StringAction =
| { type: 'GLOBALL_SEARCH_REQUEST'; payload: string };


//CollectionReducer-------------------------------------------------------------------CollectionReducer
export interface CollectionReducerState {
    collectionsName: string[],
};

export type CollectionAction =
| { type: 'GET_COLLECTION_NAME'; payload: string[] }

