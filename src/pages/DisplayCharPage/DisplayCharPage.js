import React from "react";
import "./DisplayCharPage.styles.scss";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

const DisplayCharPage = (props) => {
    return (
        <Layout>
        <div className="char-page-container">
            <h2>Char Page</h2>
            <h3>Char 1</h3>
            <p>Firstname: {props.char1_FN}</p>
            <p>Lastname: {props.char1_LN}</p>
            <h3>Char 2</h3>
            <p>Firstname: {props.char2_FN}</p>
            <p>Lastname: {props.char2_LN}</p>
            <h3>Char 3</h3>
            <p>Firstname: {props.char3_FN}</p>
            <p>Lastname: {props.char3_LN}</p>

            <Link to="/" className="navigation-link">BACK TO HOMEPAGE</Link>
        </div>
        </Layout>
    );
};
const mapStateToProps = (state) => {
    return {
        showMenu: state.toggleMenuReducer.menuOpen,
        char1_FN: state.characterReducer.char1_FN,
        char1_LN: state.characterReducer.char1_LN,
        char2_FN: state.characterReducer.char2_FN,
        char2_LN: state.characterReducer.char2_LN,
        char3_FN: state.characterReducer.char3_FN,
        char3_LN: state.characterReducer.char3_LN,
    };
};

export default connect(mapStateToProps)(DisplayCharPage);
