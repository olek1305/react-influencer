import React, { Component, Dispatch } from 'react';
import Nav from "../components/Nav";
import axios from 'axios';
import { User } from "../classes/user";
import { connect } from "react-redux";
import { setUser } from "../redux/reducers/userSlice"
import {RootState} from "../redux/configureStore";

interface Props {
    user: User | null;
    setUser: (user: User) => void;
    children: React.ReactNode;
}

class Wrapper extends Component<Props> {
    componentDidMount = async () => {
        // Only fetch user if user is not already set in Redux
        if (!this.props.user) {
            try {
                const response = await axios.get('user');
                const userData = response.data.data;
                this.props.setUser(userData); // Set user in Redux store
            } catch (e) {
                console.error("Error fetching user:", e);
            }
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

const mapStateToProps = (state: RootState) => {
    return {
        user: state.user, // Get user from Redux state
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user)),
    };
};

// Connect component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
