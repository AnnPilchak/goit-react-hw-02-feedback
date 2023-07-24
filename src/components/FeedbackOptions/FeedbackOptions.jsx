import { Component } from "react";
import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

class FeedbackOptions extends Component {
    static propTypes = {
        onLeaveFeedback: PropTypes.func.isRequired,
    };

    render() {
        const { onLeaveFeedback } = this.props;
        return (
            <>
                <Button type="button" onClick={() => onLeaveFeedback('good')}>Good</Button>
                <Button type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
                <Button type="button" onClick={() => onLeaveFeedback('bad')}>Bad</Button>
            </>
        )
    }
};

export default FeedbackOptions;