import React                         from "react";
import { Drawer, withTheme }         from "@material-ui/core";
import { RouteComponentProps }       from "react-router-dom";
import styled                        from "styled-components";
import { NotificationListenerProps } from "./NotificationListener";
import {
    default as Header,
    HeaderProps
} from "../Header";
import NavigationBar                 from "../NavigationBar";

interface State {
    drawerOpend: boolean;
}

interface Props extends RouteComponentProps<{}>, NotificationListenerProps {
    render: (mainLayoutEventProps: MainLayoutEventProps) => React.ReactNode;
}

export interface MainLayoutEventProps {
}

interface DrawerContextModel {
    toggleDrawer: () => void;
}

export const DrawerContext = React.createContext<DrawerContextModel>({
    toggleDrawer: () => undefined
});

export default class extends React.Component<Props, State> {

    componentWillMount() {
        this.setState({
            drawerOpend: false
        });
    }

    toggleDrawer = () => this.setState({ drawerOpend: !this.state.drawerOpend });

    render() {

        const {
            // history,
            // notificationListener,
            render
        } = this.props;

        return (
            <div>
                <StyledHeader
                    toggleDrawer={this.toggleDrawer}
                    position="fixed"
                />
                <Host>
                    <div>
                        <Drawer
                            variant="temporary"
                            anchor={"left"}
                            open={this.state.drawerOpend}
                            onClose={this.toggleDrawer}
                            ModalProps={{ keepMounted: true }}
                        >
                            <StyledNavigationBar/>
                        </Drawer>
                    </div>
                    <div>
                        <Drawer
                            variant="permanent"
                            open
                        >
                            <StyledNavigationBar/>
                        </Drawer>
                    </div>
                    <Content>
                        <DrawerContext.Provider
                            value={{
                                toggleDrawer: this.toggleDrawer
                            }}
                        >
                            <Main>
                                {render({})}
                            </Main>
                        </DrawerContext.Provider>
                    </Content>
                </Host>
            </div>
        );
    }
}

const Host = styled.div`
    background-color: #fafbfd;
    > :nth-child(1) {
        display: none;
    }
    > :nth-child(2) {
        display: flex;
    }

    @media (max-width: 767px) {
        > :nth-child(1) {
            display: flex;
        }
        > :nth-child(2) {
            display: none;
        }
    }
`;

const Content = styled.div`
    position: relative;
    width: calc(100% - 15rem);
    margin-left: 15rem;
    min-height: 100vh;
    margin-bottom: 100px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 80px;
    @media (max-width: 767px) {
        width: 100%;
        margin-left: 0rem;
    }
`;

const Main = styled.main`
`;

const StyledNavigationBar = styled(NavigationBar)`
    width: 15rem;
`;

const _Header = styled<HeaderProps>(Header)`
    && {
        z-index: ${(props: any) => props.theme.zIndex.drawer + 1}
    }
`;

const StyledHeader = withTheme()(
    (props: any) => <_Header {...props}/>
);
