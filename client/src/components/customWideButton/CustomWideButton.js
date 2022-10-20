import React from "react";
import Button from "react-bootstrap/Button";
import './CustomWideButton.scss'

const CustomWideButton = (props) => {
    return (
        <Button size="sm"
            onClick={props.onClick}
            className={props.className}>
            {props.buttonText}
        </Button>
    )
}

export default CustomWideButton;