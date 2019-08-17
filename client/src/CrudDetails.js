import React from "react";

const CrudDetails = props => {
    return (
        <div className="CrudDetails">
            <p>{props.title}</p>
            <p>{props.description}</p>
            <button
                className="myButton"
                onClick={(event) => props.editClickedHandler(event, props.id)}
            >
                Edit
            </button>
            <button
                className="myButton"
                onClick={(event) => props.deleteClickedHandler(event, props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default CrudDetails;
