import React from "react";
import { Link } from 'react-router-dom';

const CrudDetails = props => {
    return (
        

                <tr>
                    <td>{props.title}</td>
                    <td>{props.description}</td>
                    <td>
                        <Link to={`/crudDetails/${props.id}`} className="list-button">Edit</Link>
                    </td>
                    <td>
                        <button
                            className="list-button"
                            onClick={event => props.deleteClicked(event, props.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
        
    );
};

export default CrudDetails;
