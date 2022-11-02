import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './Login.scss';
import CloseButton from "react-bootstrap/CloseButton";
import Form from 'react-bootstrap/Form';
import CustomWideButton from "../customWideButton/CustomWideButton";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../redux/slice/auth";
import { GetApi, PostApi } from "../../services/api.service";
import { baseUrl } from "../../services/apiUrl";
import { useDispatch } from "react-redux";


const Login = (props) => {
    const [isNextClicked, setIsNextClicked] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        if (!isNextClicked) {
            setIsNextClicked(true)
        } else {
            handleLogin();
        }
    }

    const getUserData = async () => {
        await GetApi(`${baseUrl}/users`)
            .then(response => {
                console.log(response)
                dispatch(setCurrentUser(response));
            })
            .catch(error => console.log(error))

        // navigate("/home");
    }

    const handleLogin = async () => {
        getUserData()
        if (!user.email == "" || !user.password == "") {
            await PostApi(`${baseUrl}/users/login`, user)
                .then(response => {
                    console.log(response.data)
                    const { token } = response.data;
                    localStorage.setItem("jwtToken", token);
                    // dispatch(setCurrentUser(response.data));
                })
                .catch(error => console.log(error))
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

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
                        required
                        style={{ width: "300px" }}
                        onChange={handleChange}
                        name="email"
                        value={user.email}
                        type="email"
                        placeholder="Phone, email, or username"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a email.
                    </Form.Control.Feedback>
                    <br />
                    {isNextClicked &&
                        <div>
                            <Form.Control
                                required
                                style={{ width: "300px" }}
                                onChange={handleChange}
                                name="password"
                                value={user.password}
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                        </div>}
                    <CustomWideButton className="next-button" buttonText={isNextClicked ? "Login" : "Next"} onClick={handleButtonClick} />
                    <CustomWideButton className="forgot-password-button" buttonText="Forgot Password?" />
                    <p onClick={() => props.handleShowModal('register')} className="dont-have-account">
                        Don't have an account? <b>SignUp</b>
                    </p>
                </div>
            </Modal.Body>
        </div>
    )
}

export default Login;