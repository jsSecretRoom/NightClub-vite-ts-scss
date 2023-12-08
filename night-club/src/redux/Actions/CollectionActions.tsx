import { CollectionAction } from '../TS-STATE';

export const setNameCollections = (addCollection: string[]): CollectionAction => ({
    type: 'GET_COLLECTION_NAME',
    payload: addCollection,
});
