import React, {useEffect} from "react";
import "./Navbar.styles.scss";
import { connect } from "react-redux";
import { toggleMenu, closeMenu } from "../../redux/toggleMenu/toggleMenu.actions";

const Navbar = (props) => {
    useEffect(() => {
        props.closeMenu();
    }, [])

    return (
        <div className="navbar-container">
            <h1>Redux-In-React</h1>
            <div className="dropdown">
                <p onClick={props.menuToggler}>Click to View Characters</p>
                {props.showMenu && (
                    <div className="char-display">
                        <h3>Char 1</h3>
                        <p>Firstname: {props.char1_FN}</p>
                        <p>Lastname: {props.char1_LN}</p>
                        <h3>Char 2</h3>
                        <p>Firstname: {props.char2_FN}</p>
                        <p>Lastname: {props.char2_LN}</p>
                        <h3>Char 3</h3>
                        <p>Firstname: {props.char3_FN}</p>
                        <p>Lastname: {props.char3_LN}</p>
                    </div>
                )}
            </div>
        </div>
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
        closeMenu: () => dispatch(closeMenu()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
