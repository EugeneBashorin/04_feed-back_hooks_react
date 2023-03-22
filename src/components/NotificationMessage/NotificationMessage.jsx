import React from "react";
import PropTypes from 'prop-types';
import { InformMessage } from "./NotificationMessage.styled.jsx";

const NotificationMessage = ({message}) => {
    return (
        <InformMessage>{message}</InformMessage>

    )
}

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default NotificationMessage;