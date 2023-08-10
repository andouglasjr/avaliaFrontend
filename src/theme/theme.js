import { extendTheme } from "@chakra-ui/react";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";
import { progressStyles } from "./components/progress";
import { linkStyles } from "./components/link";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
import { badgeStyles } from "./components/badge";

export default extendTheme({ breakpoints }, // Breakpoints
    globalStyles,
    buttonStyles, // button styles
    linkStyles, // link styles
    progressStyles, // progress styles
    inputStyles, // input styles
    badgeStyles
);