import { mode } from "@chakra-ui/theme-tools";
export const badgeStyles = {
    components: {
        Badge: {
            baseStyle: {
                borderRadius: "8px",
                padding: "2px 12px 2px 12px",
            },
            variants: {
                purple: (props) => ({
                    bg: mode("purple.0", "")(props),
                    color: "purple.3"
                }),
                cyan: (props) => ({
                    bg: mode("cyan.1", "")(props),
                    color: "cyan.4"
                }),
                green: (props) => ({
                    bg: mode("ggreen.0", "")(props),
                    color: "ggreen.3"
                }),
                yellow: (props) => ({
                    bg: mode("yellow.1", "")(props),
                    color: "yellow.4"
                }),
                red: (props) => ({
                    bg: mode("rred.1", "")(props),
                    color: "rred.4"
                }),
                neutral: (props) => ({
                    bg: mode("neutralLight.3", "")(props),
                    color: "neutralDark.2"
                }),

                brand: (props) => ({
                    bg: mode("brand.500", "brand.400")(props),
                    color: "white",
                    _focus: {
                        bg: mode("brand.500", "brand.400")(props),
                    },
                    _active: {
                        bg: mode("brand.500", "brand.400")(props),
                    },
                    _hover: {
                        bg: mode("brand.600", "brand.400")(props),
                    },
                }),
            },
        },
    },
};