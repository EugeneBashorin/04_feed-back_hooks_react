import React, { Component } from "react";
import PropTypes from "prop-types"
import Section from "components/Section/Section";
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from "components/Statistics/Statistics";
import NotificationMessage from "components/NotificationMessage/NotificationMessage";


export class Feedback extends Component {

    static defaultProps = {
      step: 1,
      initialGoodValue:0,
      initialNeutralValue:0,
      initialBadValue:0,
    };

    static propTypes = {
      initialGoodValue: PropTypes.number.isRequired,
      initialNeutralValue: PropTypes.number.isRequired,
      initialBadValue: PropTypes.number.isRequired,
      step: PropTypes.number.isRequired,
    }

    state = {
      good: this.props.initialGoodValue,
      neutral: this.props.initialNeutralValue,
      bad: this.props.initialBadValue,
    }   
  

  totalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = this.state.good + this.state.neutral;

    if(totalFeedback > 0){
      // debugger;
      const positiveFeedbackPercentage = Math.round((positiveFeedback)/(totalFeedback)*100);
      return positiveFeedbackPercentage;
  }
    return 0;
  }

  addFeedbackHandler = (btnClickData) => {
    this.setState((prevState, props)=>{
      return{
        [btnClickData]: prevState[btnClickData] + props.step,
      }
    }) 

  }

  render() {
    return (
        <>
            <Section title="Please leave feedback">
              <FeedbackOptions //add buttons
                onLeaveFeedback={this.addFeedbackHandler}
                options={this.state}
              />   
            </Section>         
            <Section>
              { 
              this.totalFeedback() > 0
              ? <Statistics 
                good={this.state.good} 
                neutral={this.state.neutral} 
                bad={this.state.bad} 
                total={this.totalFeedback()} 
                positivePercentage={this.countPositiveFeedbackPercentage()}/>
              :<NotificationMessage message="There is no feedback"/>
            }
            </Section>
        </>
    )
  }
}