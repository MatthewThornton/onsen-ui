import React from "react";
import { Link } from "react-router-dom";
import { Page, Toolbar, Button } from "react-onsenui";

export default class About extends React.Component {
    render() {
        return (
            <Page>
                <p>About</p>
                <Link to="/">
                    <Button>Go Home</Button>
                </Link>
            </Page >
        )
    }
}