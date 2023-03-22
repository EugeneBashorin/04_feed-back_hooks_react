import React from "react";
import PropTypes, {objectOf} from 'prop-types';
import { List, Btn } from "./FeedbackOptions.styled.jsx";

const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return(
        <List>
            {Object.keys(options).map(option => (
                <li key={option}>
                    <Btn type='button' onClick={() => onLeaveFeedback(option)} style={{textTransform: 'capitalize'}}>{option}</Btn>
                </li>)
        )}
        </List>
    )
}

FeedbackOptions.propTypes = {
    options: objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;