import * as actionTypes from "../actions/actionTypes";

const initStore = {
    loading: false,
    data: [],
    crud: null,
    count: 0,
    error: ""
};

const CrudReducer = (store = initStore, action) => {
    switch (action.type) {
        case actionTypes.CRUD_SUCCESS:
            return {
                ...store,
                data: action.payload.cruds
            };
        case actionTypes.CRUD_DETAILS_SUCCESS:
            return {
                ...store,
                crud: action.payload
            };
        case actionTypes.UPDATE_CRUD_SUCCESS:
            return {
                ...store,
                crud: action.payload
            };
        case actionTypes.DELETE_CRUD_SUCCESS:
            return {
                ...store,
                crud: action.payload
            };
        case actionTypes.CRUD_ERROR:
            return { ...store, error: action.payload };
        case actionTypes.LOADING_START:
            return { ...store, loading: !store.loading };
        case actionTypes.LOADING_END:
            return { ...store, loading: !store.loading };
        case actionTypes.CREATE_CRUD_SUCCESS:
            return { ...store };
        default:
            return store;
    }
};
export default CrudReducer;
