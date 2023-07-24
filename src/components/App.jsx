import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

import {Container} from "./App.styled"

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    // метод для оновлення стану компонента після отримання відгуку
    onLeaveFeedback = (value) => {
        this.setState((prevState) => ({
        [value]: prevState[value] + 1,
        }));
    };
    // метод для обчислення загальної к-сті відгуків
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };
    // метод для обчислення відсотка позитивних відгуків
    countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback() === 0 ? 0 : Math.round((this.state.good / this.countTotalFeedback())*100);
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        onLeaveFeedback={this.onLeaveFeedback}>
                    </FeedbackOptions>
                </Section>
                <Section title="Statistics">
                    {total ? (
                        <Statistics
                            good={good} neutral={neutral} bad={bad}
                            total={total} positivePercentage={positivePercentage}>
                        </Statistics>
                    ) : (
                            <Notification message="There is no feedback" />
                     ) 
                        }
                </Section>
            </Container>
        )
    }
}
export default App;