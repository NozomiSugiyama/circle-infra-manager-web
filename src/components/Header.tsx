import React, { Fragment } from "react";
import {
    AppBar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Toolbar,
    Typography,
    IconButton
} from "@material-ui/core";
import { AppBarProps }      from "@material-ui/core/AppBar";
import { TypographyProps }  from "@material-ui/core/Typography";
import { ToolbarProps }     from "@material-ui/core/Toolbar";
import { Menu as MenuIcon } from "@material-ui/icons";
import styled               from "styled-components";

interface HeaderState {
    signInDialogOpend: boolean;
}

export interface HeaderProps extends AppBarProps {
    toggleDrawer: () => void;
    onSignIn: () => void;
    onSignOut: () => void;
    signInd: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {

    state = {
        signInDialogOpend: false,
    };

    handleClickOpen = () => {
        this.setState({ signInDialogOpend: true });
    }

    handleClose = () => {
        this.setState({ signInDialogOpend: false });
    }

    render() {
        const {
            toggleDrawer,
            onSignIn,
            onSignOut,
            signInd = false,
            ...props
        } = this.props;

        return (
            <Fragment>
                <AppBar position="static" {...props}>
                    <MyToolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Title>ななまる - Circle Infra Manager</Title>
                        {signInd ? (
                            <Button
                                color="inherit"
                                onClick={onSignOut}
                            >
                                Sign Out
                            </Button>
                        ) : (
                            <Button
                                color="inherit"
                                onClick={this.handleClickOpen}
                            >
                                Sign In
                            </Button>
                        )}
                    </MyToolbar>
                </AppBar>
                <Dialog
                    open={this.state.signInDialogOpend}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

const Title = styled<TypographyProps>(Typography)`
    && {
        color: white;
        font-size: 1.5rem;
        letter-spacing: 2px;
        flex-grow: 1;
        padding-left: 1rem;
    }
`;

const MyToolbar = styled<ToolbarProps>(Toolbar)`
    && {
        > :nth-child(1) {
            display: none;
        }
        @media (max-width: 767px) {
            > :nth-child(1) {
                display: inline-flex;
            }
        }
    }
`;
