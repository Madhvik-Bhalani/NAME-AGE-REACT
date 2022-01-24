import React from 'react';
import ReactDOM from 'react-dom';
import './Alert.css'

const AlDiv = (props) => {
    return (props.alert && <React.Fragment>

        <div className={`alert alert-${props.alert.type} alert-dismissible fade show alertdiv`}
            role="alert"  >
            <h2>
                <strong style={{ textTransform: "capitalize" }}>{props.alert.type}</strong>:
            </h2>
            <h4>
                <strong style={{ textTransform: "capitalize" }}>{props.alert.msg}</strong>
            </h4>

            <button onClick={props.dismiss} className={`btn btn-${props.alert.type === "warning" ? "danger" :
                "success"} w-25`}>Okay</button>
        </div>
    </React.Fragment>
    );
}
const BackDiv = (props) => {
    return props.alert && <div className='backdrop' />


}
function Alert(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<AlDiv alert={props.alert} dismiss={props.dismiss} />, document.getElementById("error-root"))}
            {ReactDOM.createPortal(<BackDiv alert={props.alert} />, document.getElementById("backdrop-root"))}
        </React.Fragment>
    );
}

export default Alert;
