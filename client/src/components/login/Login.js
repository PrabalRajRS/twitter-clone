import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './Login.scss';
import CloseButton from "react-bootstrap/CloseButton";
import Form from 'react-bootstrap/Form';
import CustomWideButton from "../customWideButton/CustomWideButton";

const Login = (props) => {
    return (
        <div className="login">
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="header">
                        <CloseButton style={{ fontSize: 16 }} onClick={props.onHide} />
                        <Image src="/twitter-logo.png" className="twitter-logo" />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body">
                    <h3 className="body-title">Sign in to Twitter</h3>
                    <br />
                    <Form.Control
                        style={{ width: "300px" }}
                        size="lg"
                        type="text"
                        placeholder="Phone, email, or username"
                    />
                    <br />
                    <CustomWideButton className="next-button" buttonText="Next" />
                    <CustomWideButton className="forgot-password-button" buttonText="Forgot Password?" />
                    <p className="dont-have-account">Don't have an account? <a href='/'>SignUp</a></p>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </div>
    )
}

export default Login;