import { CharacterTypes } from "./character.types";

const initialState = {
    char1_FN: "",
    char1_LN: "",
    char2_FN: "",
    char2_LN: "",
    char3_FN: "",
    char3_LN: "",
};

const characterReducer = (state = initialState, action) => {
    console.log(action.payload, action.type);
    switch (action.type) {
        case CharacterTypes.UPDATE_CHAR1_FN:
            return {
                ...state,
                char1_FN: action.payload,
            };
        case CharacterTypes.UPDATE_CHAR1_LN:
            return {
                ...state,
                char1_LN: action.payload,
            };
        case CharacterTypes.UPDATE_CHAR2_FN:
            return {
                ...state,
                char2_FN: action.payload,
            };
        case CharacterTypes.UPDATE_CHAR2_LN:
            return {
                ...state,
                char2_LN: action.payload,
            };
        case CharacterTypes.UPDATE_CHAR3_FN:
            return {
                ...state,
                char3_FN: action.payload,
            };
        case CharacterTypes.UPDATE_CHAR3_LN:
            return {
                ...state,
                char3_LN: action.payload,
            };
        case CharacterTypes.SUBMIT:
            return {
                ...state,
                char1_FN: action.payload.char1_FN,
                char1_LN: action.payload.char1_LN,
                char2_FN: action.payload.char2_FN,
                char2_LN: action.payload.char2_LN,
                char3_FN: action.payload.char3_FN,
                char3_LN: action.payload.char3_LN,
            };
        default:
            return state;
    }
};

export default characterReducer;
