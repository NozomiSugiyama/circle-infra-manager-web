import React from "react";
import { PageComponentProps } from "../../App";
import Page                   from "../commons/Page";

export default class WorkListPage extends React.Component<PageComponentProps<{id: string}>>{

    render() {

        const {
            // history,
            // notificationListener
        } = this.props;

        return (
            <Page>
                TopPage
            </Page>
        );
    }
}
