import React, { Component } from "react";
import { GetCrudDetails, UpdateCrud } from "./store/actions";
import { connect } from "react-redux";
// import Crud from "./Crud";
import "./CrudApp.css";

class CrudDetails extends Component {
    state = {
        title: "",
        description: "",
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getCrudDetails(id);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.data && this.props.data !== prevProps.data) {
            this.setState({ title: this.props.data.title, description: this.props.data.description })
        }
    }

    onClickHandler = () => {
        const { id } = this.props.match.params;
        const { title, description } = this.state;
        this.props.updateCrud(id, { title, description });
        this.props.history.goBack();
        //console.log("Imananq",this.props)
    };

    onChangeHandler = (event, name) => {
        const { value } = event.target;
        const { state } = this;
        this.setState({ ...state, [name]: value });
    };


    render() {
        return (
            <div className="CrudDetails">
                <div className="myForm">
                    <input
                        type="text"
                        value={this.state.title}
                        placeholder="your title"
                        className="formField"
                        onChange={event => this.onChangeHandler(event, "title")}
                    />
                    <input
                        type="text"
                        value={this.state.description}
                        placeholder="your description"
                        className="formField"
                        onChange={event =>
                            this.onChangeHandler(event, "description")
                        }
                    />
                    <button className="myButton" onClick={this.onClickHandler}>
                        Update
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        data: store.crud.crud
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getCrudDetails: id => dispatch(GetCrudDetails(id)),
        updateCrud: (id, data) => dispatch(UpdateCrud(id, data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CrudDetails);
