import React, {Component, PropsWithChildren} from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";

type WrapperProps = PropsWithChildren<any>;

class Wrapper extends Component<WrapperProps> {
    render() {
        const { children } = this.props
        return (
            <div>
                <Nav/>

                <main>

                    <Header/>

                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            {children}
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}

export default Wrapper;