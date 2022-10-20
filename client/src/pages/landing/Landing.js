import React from "react";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './Landing.scss';
import Button from 'react-bootstrap/Button';
import Login from "../../components/login/Login";
import CustomWideButton from "../../components/customWideButton/CustomWideButton";

const Landing = () => {
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Login onHide={props.onHide} />
            </Modal>
        );
    }
    return (
        <Container className="landing">
            <Row >
                <Col className="left-side">
                    <Image src="/landing.jpg" className="landing-image" />
                </Col>
                <Col className="right-side">
                    <Image src="/twitter-logo.png" className="twitter-logo" />
                    <h1 className="titleOne">Happening now</h1>
                    <h3 className="titleTwo">Join Twitter Today.</h3>
                    <CustomWideButton onClick={() => setModalShow(true)} className="signUp-button" buttonText="Sign up with phone or email" />
                    <p className="termConditions">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                    <p className="already-have-account">Already have an account?</p>
                    <CustomWideButton onClick={() => setModalShow(true)} className="signIn-button" buttonText="Sign in" />
                </Col>
            </Row>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    )
}

export default Landing