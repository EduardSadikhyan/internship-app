import React, { Component } from "react";
import { CreateCrud, GetCrud, UpdateCrud, DeleteCrud } from "./store/actions";
import { connect } from "react-redux";
import CrudDetails from "./CrudDetails";
import "./CrudApp.css";

class CrudApp extends Component {
    state = {
        title: "",
        description: ""
    };

    onClickHandler = () => {
        const { title, description } = this.state;
        this.props.createCrud({ title, description });
    };

    onChangeHandler = (event, name) => {
        const { value } = event.target;
        const { state } = this;
        this.setState({ ...state, [name]: value });
    };

    editClickedHandler = (event, id) => {};

    deleteClickedHandler = (event, id) => {};

    render() {
        return (
            <div className="CrudApp">
                <h2>React Crud Application</h2>
                <div className="myForm">
                    <input
                        type="text"
                        placeholder="your title"
                        className="formField"
                        onChange={event => this.onChangeHandler(event, "title")}
                    />
                    <input
                        type="text"
                        placeholder="your description"
                        className="formField"
                        onChange={event =>
                            this.onChangeHandler(event, "description")
                        }
                    />
                    <button className="myButton" onClick={this.onClickHandler}>
                        submit
                    </button>
                </div>
                <div>
                    {this.props.data.map(d => (
                        <CrudDetails {...d} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        data: store.crud.data
    };
};
const mapDispatchToProps = dispatch => {
    return {
        createCrud: data => dispatch(CreateCrud(data)),
        getCrud: filter => dispatch(GetCrud(filter)),
        updateCrud: (id, data) => dispatch(UpdateCrud(id, data)),
        deleteCrud: (id, data) => dispatch(DeleteCrud(id, data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CrudApp);
