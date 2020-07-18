import React from "react";
import Layout from "../../components/Layout/Layout";
import SummaryContainer from "../../components/Summary/Summary";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/toggleMenu/toggleMenu.actions";
import {
    updateFN_Char1,
    updateFN_Char2,
    updateFN_Char3,
    updateLN_Char1,
    updateLN_Char2,
    updateLN_Char3,
    submit,
} from "../../redux/character/character.actions";

import "./Homepage.styles.scss";

const Homepage = (props) => {
    let history = useHistory();

    const handleFirstnameUpdate = (e) => {
        if (e.target.name === "first-char-name") {
            props.updateFN_Char1(e.target.value);
            return;
        }
        if (e.target.name === "second-char-name") {
         
            props.updateFN_Char2(e.target.value);
            return;
        }

        if (e.target.name === "third-char-name") {
            
            props.updateFN_Char3(e.target.value);
            return;
        }
    };

    const handleLastnameUpdate = (e) => {
        if (e.target.name === "first-char-lastname") {
            props.updateLN_Char1(e.target.value);
            return;
        }
        if (e.target.name === "second-char-lastname") {
         
            props.updateLN_Char2(e.target.value);
            return;
        }

        if (e.target.name === "third-char-lastname") {
            
            props.updateLN_Char3(e.target.value);
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateAlldata({
                char1_FN: props.char1_FN,
                char1_LN: props.char1_LN,
                char2_FN: props.char2_FN,
                char2_LN: props.char2_LN,
                char3_FN: props.char3_FN,
                char3_LN: props.char3_LN,
        });

        history.push("/display-character")
        
    }

    return (
        <Layout>
            <div className="homepage-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="forms-container">
                        <div className="single-form-container">
                            <h2>Character 1</h2>
                            <label htmlFor="first-char-name">Firstname</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="first-char-name"
                                onChange={handleFirstnameUpdate}
                            />
                            <label htmlFor="first-char-lastname">
                                Lastname
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="first-char-lastname"
                                onChange={handleLastnameUpdate}
                            />
                        </div>
                        <div className="single-form-container">
                            <h2>Character 2</h2>
                            <label htmlFor="second-char-name">Firstname</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="second-char-name"
                                onChange={handleFirstnameUpdate}
                            />
                            <label htmlFor="second-char-lastname">
                                Lastname
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="second-char-lastname"
                                onChange={handleLastnameUpdate}
                            />
                        </div>
                        <div className="single-form-container">
                            <h2>Character 3</h2>
                            <label htmlFor="third-char-name">Firstname</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="third-char-name"
                                onChange={handleFirstnameUpdate}
                            />
                            <label htmlFor="third-char-lastname">
                                Lastname
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="third-char-lastname"
                                onChange={handleLastnameUpdate}
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit To View Character Page
                    </button>
                </form>
                <SummaryContainer />
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

const mapDispatchToProps = (dispatch) => {
    return {
        menuToggler: () => dispatch(toggleMenu()),
        updateFN_Char1: (data) => dispatch(updateFN_Char1(data)),
        updateFN_Char2: (data) => dispatch(updateFN_Char2(data)),
        updateFN_Char3: (data) => dispatch(updateFN_Char3(data)),
        updateLN_Char1: (data) => dispatch(updateLN_Char1(data)),
        updateLN_Char2: (data) => dispatch(updateLN_Char2(data)),
        updateLN_Char3: (data) => dispatch(updateLN_Char3(data)),
        updateAlldata: (data) => dispatch(submit(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
