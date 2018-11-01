import React from "react";
import { PageComponentProps } from "../../App";
import Page                   from "../commons/Page";

export default class DashboardPage extends React.Component<PageComponentProps<{id: string}>>{

    render() {

        const {
            // history,
            // notificationListener
        } = this.props;

        return (
            <Page>
                DashboardPage
            </Page>
        );
    }
}
