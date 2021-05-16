import { darkColors, lightColors } from "../../theme/colors";
import { AraswapToggleTheme } from "./types";

export const light: AraswapToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: AraswapToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
