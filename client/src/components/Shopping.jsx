import React from 'react';
import '../css/shopping.css';

class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        column one
                    </div>
                    <div className="col-6">
                        <span>
                            <i className="fas fa-home"/>
                        </span>

                    </div>
                </div>
            </div>
        );
    }
}

export default Shopping;
