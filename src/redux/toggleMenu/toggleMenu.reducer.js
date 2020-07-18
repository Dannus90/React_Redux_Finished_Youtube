import { ToggleMenuTypes } from "./toggleMenu.types";

const initialState = {
    menuOpen: false,
};

const toggleMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ToggleMenuTypes.TOGGLE_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen,
            };
        case ToggleMenuTypes.CLOSE_MENU:
            return {
                ...state,
                menuOpen: false,
            };
        default:
            return state;
    }
};

export default toggleMenuReducer;
