import React, {Component, Dispatch, PropsWithChildren} from 'react';
import Nav from "../components/Nav";
import axios from 'axios';
import {User} from "../classes/user";
import {connect} from "react-redux";
import setUser from "../redux/actions/setUserAction";

class Wrapper extends Component<PropsWithChildren<any>> {

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
            console.log(e)
        }
    }

    render() {
        return (
            <>
                <Nav/>

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
        setUser: (user: User) => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
