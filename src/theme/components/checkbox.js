import { mode } from "@chakra-ui/theme-tools";
export const checkboxStyles = {
    components: {
        Checkbox: {
            baseStyle: (props) => ({
                control: {
                    borderColor: "neutralDark.0",
                    border: "2px solid",
                    _checked: {
                        borderColor: "purple.2",
                    },
                    _hover:{
                        transition: "all 400ms ease-in-out",
                        borderColor: mode("purple.1", "")(props),
                        backgroundColor: mode("purple.0", "")(props)
                    },
                },
                icon: {
                    color: "purple.2"
                },
            }),
        },
    },
}
