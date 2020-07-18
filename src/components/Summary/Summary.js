import React from "react";
import { connect } from "react-redux";
import "./Summary.styles.scss";

const Summary = (props) => {
    return (
        <div className="summary-container">
            <div className="char-container">
                <h3>Char 1</h3>
                <p>FirstName: {props.char1_FN}</p>
                <p>Lastname: {props.char1_LN}</p>
            </div>

            <div className="char-container">
                <h3>Char 2</h3>
                <p>FirstName: {props.char2_FN}</p>
                <p>Lastname: {props.char2_LN}</p>
            </div>

            <div className="char-container">
                <h3>Char 3</h3>
                <p>FirstName: {props.char3_FN}</p>
                <p>Lastname: {props.char3_LN}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        char1_FN: state.characterReducer.char1_FN,
        char1_LN: state.characterReducer.char1_LN,
        char2_FN: state.characterReducer.char2_FN,
        char2_LN: state.characterReducer.char2_LN,
        char3_FN: state.characterReducer.char3_FN,
        char3_LN: state.characterReducer.char3_LN,
    };
};

export default connect(mapStateToProps)(Summary);
