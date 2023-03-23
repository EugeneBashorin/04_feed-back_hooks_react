import React, { useState } from "react";
import PropTypes from "prop-types"
import Section from "components/Section/Section";
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from "components/Statistics/Statistics";
import NotificationMessage from "components/NotificationMessage/NotificationMessage";

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackStateData = {
    good,
    neutral,
    bad
  }

  const STEP = 1;

  const totalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = good + neutral;
    if(totalFeedback > 0){
      const positiveFeedbackPercentage = Math.round((positiveFeedback)/(totalFeedback)*100);
      return positiveFeedbackPercentage;
    }
    return 0;
  }

  const addFeedbackHandler = (btnClickData) => {
    switch(btnClickData){
      case "good":
        setGood( prevState => prevState + STEP)
        break;
      case "neutral":
        setNeutral( prevState => prevState + STEP)
        break;
      case "bad":
        setBad( prevState => prevState + STEP)
        break;
      default:
        return;
    }
  }
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions //add buttons
        onLeaveFeedback={addFeedbackHandler}
        options={feedbackStateData}
        />   
      </Section>         
      <Section>
        { 
        totalFeedback() > 0
        ? <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={totalFeedback()} 
        positivePercentage={countPositiveFeedbackPercentage()}/>
        :<NotificationMessage message="There is no feedback"/>
      }
      </Section>
    </>
  )
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
}