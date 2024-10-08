import React, { Component, Dispatch } from 'react';
import Nav from "../components/Nav";
import axios from 'axios';
import { User } from "../classes/user";
import { connect } from "react-redux";
import { setUser } from "../redux/reducers/userSlice"

interface Props {
    setUser: (user: User) => void;
    children: React.ReactNode;
}

class Wrapper extends Component<Props> {
    componentDidMount = async () => {
        try {
            const response = await axios.get('user');

            const userData = response.data.data;

            this.props.setUser(userData);
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



const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    };
};

export default connect(null, mapDispatchToProps)(Wrapper);
