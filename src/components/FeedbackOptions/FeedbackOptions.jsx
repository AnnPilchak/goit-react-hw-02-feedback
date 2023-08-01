import { Component } from "react";
import { List, Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

class FeedbackOptions extends Component {
    static defaultProps = {
        options: [],
    };

    static propTypes = {
        onLeaveFeedback: PropTypes.func.isRequired,
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    };

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                <List>
                    {options.map(option => {
                        return (
                            <li>
                            <Button type="button" onClick={onLeaveFeedback} value={option}>
                            {option}
                            </Button>
                        </li>
                        );
                    })}
                </List>

                {/* <Button type="button" onClick={() => onLeaveFeedback('good')}>Good</Button>
                <Button type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
                <Button type="button" onClick={() => onLeaveFeedback('bad')}>Bad</Button> */}
            </>
        )
    }
};

export default FeedbackOptions;