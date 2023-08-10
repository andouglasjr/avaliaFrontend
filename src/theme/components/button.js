import { mode } from "@chakra-ui/theme-tools";
export const buttonStyles = {
    components: {
        Button: {
            baseStyle: {
                borderRadius: "8px",
                boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
                transition: ".25s all ease",
                boxSizing: "border-box",
                fontSize: "14px",
                minW: "113px",
                minH: "40px",
                margin: "5px",
                _focus: {
                    boxShadow: "none",
                    borderColor: "cyan.2",
                    borderWidth: "2px",
                    borderStyle: "solid",
                },
                _active: {
                    boxShadow: "none",
                },
            },
            variants: {
                primary: (props) => ({
                    bg: mode("purple.2", "")(props),
                    fontSize: "14px",
                    color: "white",
                    _focus: {
                        bg: mode("purple.3", "")(props),
                        borderColor: "cyan.2",
                        borderWidth: "2px",
                        borderStyle: "solid",
                    },
                    _active: {
                        bg: mode("purple.4", "")(props),
                        border: "none",
                    },
                    _hover: {
                        bg: mode("purple.3", "")(props),
                        border: "none",
                    },

                }),
                secondary: (props) => ({
                    bg: mode("", "")(props),
                    color: "purple.2",
                    fontSize: "14px",
                    minW: "113px",
                    minH: "40px",
                    borderColor: "purple.2",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    _focus: {
                        color: "purple.4",
                        borderColor: "cyan.2",
                        borderWidth: "2px",
                        borderStyle: "solid",
                    },
                    _active: {
                        bg: mode("purple.3", "")(props),
                        color: "white",
                        border: "none",
                    },
                    _hover: {
                        bg: mode("purple.1", "")(props),
                        color: "white",
                        border: "none"
                    },
                }),
                ghost: (props) => ({
                    bg: mode("", "")(props),
                    color: "purple.2",
                    fontSize: "14px",
                    minW: "113px",
                    minH: "40px",
                    borderColor: "none",
                    _active: {
                        bg: mode("", "")(props),
                        color: "purple.3",
                        borderColor: "none",
                    },
                    _hover: {
                        color: "purple.1",
                    },
                }),

                link: (props) => ({
                    bg: mode("", "")(props),
                    color: "purple.2",
                    fontSize: "14px",
                    minW: "113px",
                    minH: "40px",
                    borderColor: "none",
                    _active: {
                        bg: mode("", "")(props),
                        color: "purple.3",
                        borderColor: "none",
                    },
                    _hover: {
                        color: "purple.1",
                    },
                    _focus: {
                        border: "none"
                    }
                }),
                icon: (props) => ({
                    bg: mode("", "")(props),
                    color: "purple.2",
                    borderColor: "none",
                    _active: {
                        bg: mode("purple.3", "")(props),
                        color: "white",
                        borderColor: "none",
                    },
                    _hover: {
                        color: "purple.1",
                    },
                }),
                off: (props) => ({
                    bg: mode("", "")(props),
                    border: "none",
                    _focus: {
                        boxShadow: "none",
                        border: "none",
                    },
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
                darkBrand: (props) => ({
                    bg: mode("brand.900", "brand.400")(props),
                    color: "white",
                    _focus: {
                        bg: mode("brand.900", "brand.400")(props),
                    },
                    _active: {
                        bg: mode("brand.900", "brand.400")(props),
                    },
                    _hover: {
                        bg: mode("brand.800", "brand.400")(props),
                    },
                }),
                lightBrand: (props) => ({
                    bg: mode("#F2EFFF", "whiteAlpha.100")(props),
                    color: mode("brand.500", "white")(props),
                    _focus: {
                        bg: mode("#F2EFFF", "whiteAlpha.100")(props),
                    },
                    _active: {
                        bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
                    },
                    _hover: {
                        bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
                    },
                }),
                light: (props) => ({
                    bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
                    color: mode("secondaryGray.900", "white")(props),
                    _focus: {
                        bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
                    },
                    _active: {
                        bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
                    },
                    _hover: {
                        bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
                    },
                }),
                action: (props) => ({
                    fontWeight: "500",
                    borderRadius: "50px",
                    bg: mode("secondaryGray.300", "brand.400")(props),
                    color: mode("brand.500", "white")(props),
                    _focus: {
                        bg: mode("secondaryGray.300", "brand.400")(props),
                    },
                    _active: { bg: mode("secondaryGray.300", "brand.400")(props) },
                    _hover: {
                        bg: mode("secondaryGray.200", "brand.400")(props),
                    },
                }),
                setup: (props) => ({
                    fontWeight: "500",
                    borderRadius: "50px",
                    bg: mode("transparent", "brand.400")(props),
                    border: mode("1px solid", "0px solid")(props),
                    borderColor: mode("secondaryGray.400", "transparent")(props),
                    color: mode("secondaryGray.900", "white")(props),
                    _focus: {
                        bg: mode("transparent", "brand.400")(props),
                    },
                    _active: { bg: mode("transparent", "brand.400")(props) },
                    _hover: {
                        bg: mode("secondaryGray.100", "brand.400")(props),
                    },
                }),
            },
        },
    },
};