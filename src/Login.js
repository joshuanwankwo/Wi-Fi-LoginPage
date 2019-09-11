import React from 'react';
import Tenece from "../assets/tenece.svg";
class ApplicForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content">
                <img src={Tenece} />
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>LOGIN</button>
                    <a href="genesystechhub.com">Forgot Password?</a>
                </form>
            </div>
        )
    }
}

export default ApplicForm