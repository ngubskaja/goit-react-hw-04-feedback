import React from "react";
import {PropTypes} from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <ul className={css.feedback_list}>
        {options.map(el => 
            <li key={el}>
                <button className={css.btn} onClick= {() => 
                    onLeaveFeedback (el)} >{el }  </button>
            </li>)}
    </ul>
    )
 
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

// {el[0].toUpperCase() +el.slice(1)}