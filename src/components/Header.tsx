import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from "@material-ui/core";
import { AppBarProps }      from "@material-ui/core/AppBar";
import { TypographyProps }  from "@material-ui/core/Typography";
import { ToolbarProps }     from "@material-ui/core/Toolbar";
import { Menu as MenuIcon } from "@material-ui/icons";
import styled               from "styled-components";

export interface HeaderProps extends AppBarProps {
    toggleDrawer: () => void;
}

export default (
    {
        toggleDrawer,
        ...props
    }: HeaderProps
) => (
    <AppBar position="static" {...props}>
        <MyToolbar>
            <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={toggleDrawer}
            >
                <MenuIcon />
            </IconButton>
            <Title>ServiceName</Title>
        </MyToolbar>
    </AppBar>
);

const Title = styled<TypographyProps>(Typography)`
    && {
        color: white;
        font-size: 1.5rem;
        letter-spacing: 2px;
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
