import React from "react";
import { createMuiTheme }   from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import {
    BrowserRouter as Router,
    RouteComponentProps,
    match
} from "react-router-dom";
import ComposingRoute                from "./components/commons/ComposingRoute";
import ComposingSwitch               from "./components/commons/ComposingSwitch";
import { AuthProps }                 from "./components/wrappers/Auth";
import { MainLayoutEventProps }      from "./components/wrappers/MainLayout";
import { NotificationListenerProps } from "./components/wrappers/NotificationListener";
import {
    DashboardPage,
    TopPage
} from "./Routes";
import Root from "./Root";

export default () => (
    <MuiThemeProvider theme={theme}>
        <Router>
            <Root
                key="root"
            >
                <ComposingSwitch>
                    <ComposingRoute
                        path="/"
                        component={TopPage}
                        exact={true}
                    />
                    <ComposingRoute
                        path="/top"
                        component={TopPage}
                    />
                    <ComposingRoute
                        path="/dashboard"
                        component={DashboardPage}
                        exact={true}
                    />
                </ComposingSwitch>
            </Root>
        </Router>
    </MuiThemeProvider>
);

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#7354A4",
            main: "#694A9A",
            dark: "#5F4090",
            contrastText: "#fff",
        },
    },
    overrides: {
        MuiDialog: {
            paper: {
                borderRadius: 8,
                border: 0,
                color: "white",
            },
        },
    },
});

export interface PageComponentProps<T> extends RouteComponentProps<T>, AuthProps, NotificationListenerProps, MainLayoutEventProps {
    computedMatch?: match<T>;
}
