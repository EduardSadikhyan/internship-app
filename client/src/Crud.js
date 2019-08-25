import React from "react";
import { Link } from 'react-router-dom';
import { Roles } from './constants/roles';

const CrudDetails = props => {
    return (
        <tr>
            <td>{props.title}</td>
            <td><a href={props.description}>{props.description}</a></td>
            {props.roles !== Roles.INTERN ? <td>
                <Link to={`/crudDetails/${props.id}`} className="list-button">Edit</Link>
            </td> : null}
            {props.roles === Roles.SUADMIN ? <td>
                <button
                    className="list-button"
                    onClick={event => props.deleteClicked(event, props.id)}
                >
                    Delete
                        </button>
            </td> : null}
        </tr>

    );
};

export default CrudDetails;
