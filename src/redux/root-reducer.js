import { combineReducers } from "redux";
import toggleMenuReducer from "./toggleMenu/toggleMenu.reducer";
import characterReducer from "./character/character.reducer";

const rootReducer = combineReducers({
    toggleMenuReducer: toggleMenuReducer,
    characterReducer: characterReducer,
});

export default rootReducer;
