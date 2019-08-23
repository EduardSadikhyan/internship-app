import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { CreateCrud, GetCrud, UpdateCrud, DeleteCrud } from "./store/actions";
import { connect } from "react-redux";
import Crud from "./Crud";
import "./CrudApp.css";

class CrudApp extends Component {
    state = {
        title: "",
        description: "",
   /*      id: null,
        edit: false */
    };

    componentDidMount() {
        this.props.getCrud({})
    }
  
    onClickHandler = () => {
        const { title, description, /* edit, id */ } = this.state;
        // if (edit === true) {
        //     this.props.updateCrud(id, { title, description })
        //     this.setState({ ...this.state, edit: false })
        // } else {
        //     this.props.createCrud({ title, description })
        // }

        this.props.createCrud({ title, description })
    };

    deleteClickHandler = (event, id) => {
        this.props.deleteCrud(id)
    }
    editClickedHandler = (event, id) => {
        this.props.history.push(`/crudDetails/${id}`);
        //this.setState({ ...this.state, edit: true, id, title: data.title, description: data.description })
    }

    onCreateHandler = () => {
        this.props.history.push('/createCrud')
    }

    render() {
        return (
            <div className="CrudApp">
                <h2>SuperAdmin Dashboard</h2>
                <Link to='/createCrud' className="create-button">Create</Link>


                
                {/* <div className="myForm">  */}
                   {/* <input
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
                       { /*{this.state.edit ? "update" : "submit"} */ }
                       {/* submit */}
                    {/* </button>  */}
                {/* </div> */}
                <div>
                    <div className="CrudDetails">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.data.map(d => (
                                <Crud
                                    key={d.id}
                                    {...d}
                                    deleteClicked={this.deleteClickHandler}
                                    editClicked={this.editClickedHandler}
                                />
                            ))}
                            </tbody>
                        </table>
                    </div>
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
        deleteCrud: (id) => dispatch(DeleteCrud(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CrudApp);
