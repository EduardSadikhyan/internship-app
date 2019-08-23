import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CreateCrud} from './store/actions'
class CrudCreate extends Component {
    state = {
        title: "",
        description: ""
    }
    onChangeHandler = (event, name) => {
        console.log("changed")
        const { value } = event.target;
        const { state } = this;
        this.setState({ ...state, [name]: value });
        
    };

    onClickHandler = () => {
        console.log("Clicked")
        const { title, description,  } = this.state;
        this.props.createCrud({ title, description });
        this.props.history.push("/");
    };

    render() {
        return (
            <div className=''>
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
                        submit
                    </button>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCrud: data => dispatch(CreateCrud(data))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(CrudCreate);
