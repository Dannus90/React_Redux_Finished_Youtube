import { CharacterTypes } from "./character.types";

//Character One
export const updateFN_Char1 = (data) => ({
    type: CharacterTypes.UPDATE_CHAR1_FN,
    payload: data,
});

export const updateLN_Char1 = (data) => ({
    type: CharacterTypes.UPDATE_CHAR1_LN,
    payload: data,
});

//Character Two
export const updateFN_Char2 = (data) => ({
    type: CharacterTypes.UPDATE_CHAR2_FN,
    payload: data,
});

export const updateLN_Char2 = (data) => ({
    type: CharacterTypes.UPDATE_CHAR2_LN,
    payload: data,
});

//Character Three
export const updateFN_Char3 = (data) => ({
    type: CharacterTypes.UPDATE_CHAR3_FN,
    payload: data,
});

export const updateLN_Char3 = (data) => ({
    type: CharacterTypes.UPDATE_CHAR3_LN,
    payload: data,
});

//Submit

export const submit = (data) => ({
    type: CharacterTypes.SUBMIT,
    payload: data
})
