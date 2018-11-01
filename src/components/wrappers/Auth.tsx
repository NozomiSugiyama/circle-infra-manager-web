import React, { ReactNode } from "react";
import { signIn as signInApi } from "../../api/auth";
import { Credential } from "../../api/auth/types";

export type SingIn = (id: string, password: string) => Promise<Credential>;
export type SingUp = (userName: string, password: string, attribute?: {[key: string]: string}) => Promise<string>;
export type SingOut = () => Promise<void>;
export type UpdateId = (id: string) => Promise<void>;
export type UpdatePassword = (password: string, newPassword: string) => Promise<void>;

export type AuthProps = {
    auth: {
        signIn: SingIn;
        signUp: SingUp;
        signOut: SingOut;
        updateId: UpdateId;
        updatePassword: UpdatePassword;
        credential: Credential | null;
    };
};

interface Props {
    render: (auth: AuthProps) => ReactNode;
}

interface State {
    credential: Credential | null;
}

export default class extends React.Component<Props, State> {

    componentWillMount() {
        this.setState({
            credential: null
        });
    }

    render() {

        const {
            render
        } = this.props;

        return render({
            auth: {
                signIn: (id: string, password: string) => new Promise(async(resolve, reject) => {
                    try {
                        const credential = await signInApi({
                            id,
                            password
                        });
                        this.setState({ credential });
                        resolve(credential);
                    } catch (e) {
                        reject(e);
                    }
                }),
                signUp: (_userName, _password, _attribute) => new Promise((_resolve, _reject) => {
                    // WIP
                }),
                signOut: () => new Promise((_resolve, _reject) => {
                    // WIP
                }),
                updateId: (_id) => new Promise((_resolve, _reject) => {
                    // WIP
                }),
                updatePassword: (_password, _newPassword) => new Promise((_resolve, _reject) => {
                    // WIP
                }),
                credential: this.state.credential
            }
        });
    }
}
