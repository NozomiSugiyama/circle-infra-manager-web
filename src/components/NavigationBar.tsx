import React from "react";
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    withTheme
} from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import Link from "./commons/Link";
import styled from "styled-components";

export default (props: React.HTMLAttributes<HTMLElement>) => (
    <nav {...props}>
        <Toolbar>
            <Title>ServiceName</Title>
        </Toolbar>
        <Divider />
        <List>
            <Link
                to="/top"
            >
                <ListItem
                    button
                    selected={location.pathname === "/top" || location.pathname === "/"}
                >
                    <ListItemText
                        primary={"Top Page"}
                    />
                </ListItem>
            </Link>
            <Link
                to="/dashboard"
            >
                <ListItem
                    button
                    selected={location.pathname === "/dashboard"}
                >
                    <ListItemText
                        primary={"Dashboard"}
                    />
                </ListItem>
            </Link>
        </List>
    </nav>
);

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px;
    color: ${(props: any) => props.selected ? props.theme.palette.primary.main : "black"};
    min-height: ${(props: any) => props.theme.mixins.toolbar.minHeight}px;
    @media (min-width:0px) and (orientation: landscape) {
        min-height: ${(props: any) => props.theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight}px;
    }
    @media (min-width:600px) {
        min-height: ${(props: any) => props.theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px;
    }
`;

const Toolbar = withTheme()(
    (props: any) => <StyledDiv {...props}/>
);

const Title = styled<TypographyProps>(Typography)`
    && {
        color: #333;
        font-size: 1.5rem;
        letter-spacing: 2px;
    }
`;
