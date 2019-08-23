import * as actionTypes from "../actions/actionTypes";

import Axios from "../../Axios";

function CrudSuccess(data) {
    return {
        type: actionTypes.CRUD_SUCCESS,
        payload: data
    };
}

function CrudDetailsSuccess(data) {
    return {
        type: actionTypes.CRUD_DETAILS_SUCCESS,
        payload: data
    };
}

function UpdateCrudSuccess(data) {
    return {
        type: actionTypes.UPDATE_CRUD_SUCCESS,
        payload: data
    };
}

function DeleteCrudSuccess(data) {
    return {
        type: actionTypes.DELETE_CRUD_SUCCESS,
        payload: data
    };
}

function CreateCrudSuccess(data) {
    return {
        type: actionTypes.CREATE_CRUD_SUCCESS,
        payload: data
    };
}

function CrudError(error) {
    return {
        type: actionTypes.CRUD_ERROR,
        payload: error
    };
}

function Loading(bool) {
    return {
        type: bool ? actionTypes.LOADING_START : actionTypes.LOADING_END,
        payload: null
    };
}

export function CreateCrud(body) {
    return async dispatch => {
        try {
            dispatch(Loading(true));
            const data = await Axios.post("/forTasks", body);
            dispatch(CreateCrudSuccess(data.data));
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors);
                dispatch(CrudError(error.response.data.errors));
            } else {
                alert(error.message);
                dispatch(CrudError(error.message));
            }
        } finally {
            dispatch(Loading(false));
        }
    };
}

export function GetCrudDetails(id) {
    return async dispatch => {
        try {
            dispatch(Loading(true));
            const data = await Axios.get(`/forTasks/${id}`);
            console.log("GetCrudDetails DATA",data)
            dispatch(CrudDetailsSuccess(data.data));
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors);
                dispatch(CrudError(error.response.data.errors));
            } else {
                alert(error.message);
                dispatch(CrudError(error.message));
            }
        } finally {
            dispatch(Loading(false));
        }
    };
}

export function UpdateCrud(id, body) {
    return async dispatch => {
        try {
            dispatch(Loading(true));
            const data = await Axios.put(`/forTasks/${id}`, body);
            dispatch(UpdateCrudSuccess(data.data));
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors);
                dispatch(CrudError(error.response.data.errors));
            } else {
                alert(error.message);
                dispatch(CrudError(error.message));
            }
        } finally {
            dispatch(Loading(false));
        }
    };
}

export function DeleteCrud(id) {
    return async dispatch => {
        try {
            dispatch(Loading(true));
            const data = await Axios.delete(`/forTasks/${id}`);
            dispatch(DeleteCrudSuccess(data.data));
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors);
                dispatch(CrudError(error.response.data.errors));
            } else {
                alert(error.message);
                dispatch(CrudError(error.message));
            }
        } finally {
            dispatch(Loading(false));
        }
    };
}


export function GetCrud(filter) {
    return async dispatch => {
        try {
            dispatch(Loading(true));
            const data = await Axios.get("/forTasks", {
                params: filter
            });
            dispatch(CrudSuccess(data.data));
        } catch (error) {
            if (error.response && error.response.data.errors) {
                alert(error.response.data.errors);
                dispatch(CrudError(error.response.data.errors));
            } else {
                alert(error.message);
                dispatch(CrudError(error.message));
            }
        } finally {
            dispatch(Loading(false));
        }
    };
}
