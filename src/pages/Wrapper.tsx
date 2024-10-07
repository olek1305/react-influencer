import React, { Component, Dispatch } from 'react';
import Nav from "../components/Nav";
import axios from 'axios';
import { User } from "../classes/user";
import { connect } from "react-redux";
import setUserAction from "../redux/actions/setUserAction";

interface Props {
    setUser: (user: User) => void;
    children: React.ReactNode;
}

class Wrapper extends Component<Props> {
    componentDidMount = async () => {
        try {
            const response = await axios.get('user');

            const user: User = response.data.data;

            this.props.setUser(new User(
                user.id,
                user.first_name,
                user.last_name,
                user.email,
                user.revenue
            ));
        } catch (e) {
            console.error("Error fetching user:", e);
        }
    }

    render() {
        return (
            <>
                <Nav />
                <main role="main">
                    {this.props.children}
                </main>
            </>
        );
    }
}

const mapStateToProps = (state: { user: User }) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUserAction(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
