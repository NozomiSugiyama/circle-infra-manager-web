import React                  from "react";
import { Typography }         from "@material-ui/core";
import { PageComponentProps } from "../../App";
import Page                   from "../commons/Page";

export default class WorkListPage extends React.Component<PageComponentProps<{}>>{

    render() {

        const {
            // history,
            // notificationListener
        } = this.props;

        return (
            <Page>
                <Typography
                    variant="display1"
                >
                    TopPage
                </Typography>
            </Page>
        );
    }
}
