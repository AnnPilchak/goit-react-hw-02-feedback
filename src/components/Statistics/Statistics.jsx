import { Component } from "react";
import { List } from "./Statistics.styled"
import PropTypes from 'prop-types';

class Statistics extends Component {
    static defaultProps = {
        stats: {
            good: 0,
            neutral: 0,
            bad: 0,
        },
        total: 0,
        positivePercentage: 0,
    };

    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };


    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <List>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </List>    
        )
    }
}

export default Statistics;