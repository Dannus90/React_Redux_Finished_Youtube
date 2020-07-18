import { ToggleMenuTypes } from "./toggleMenu.types";

export const toggleMenu = () => ({
    type: ToggleMenuTypes.TOGGLE_MENU,
});

export const closeMenu = () => ({
    type: ToggleMenuTypes.CLOSE_MENU,
});
