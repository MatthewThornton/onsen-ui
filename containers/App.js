import React, { Component } from "react";
import InputPreview from "../components/InputPreview";
import { connect } from "react-redux";
import { setMessage } from "../actions/message";
import { Link } from "react-router-dom";
import { Page, Toolbar, Button } from "react-onsenui";


class App extends Component {
    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }
    render() {
        const { message } = this.props.messageReducer;
        return (
            <Page>
                <p>{ message } </p>
                <InputPreview
                    value={message}
                    onChange={this._onChange} 
                />
                <Link to="/about">
                    <Button>Go to About</Button>
                </Link>
            </Page>
        )
    }
}
export default connect(state => state)(App);