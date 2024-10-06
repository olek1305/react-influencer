import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
                <Link to={'/'} className="navbar-brand my-0 me-md-auto font-weight-normal">Influencer</Link>
                <Link to={'login'} className="btn btn-outline-primary">Login</Link>
            </div>
        );
    }
}

export default Nav;