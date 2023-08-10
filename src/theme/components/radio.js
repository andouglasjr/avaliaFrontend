//import { mode } from "@chakra-ui/theme-tools";
export const radioStyles = {
    components: {
        Radio: {
            baseStyle: {
                control: {
                    content: "none",
                    appearence: "none",
                    outline: "none",
                    borderColor: "neutralDark.0",
                    boxSizing: "borderBox",
                    //padding:"10px",
                    _checked: {
                        borderColor: "purple.2",
                        bg: "#fff"
                    },
                    icon: {
                        iconColor: {
                            bg: "Purple.2"
                        }
                    }
                },
            },
        },
    },
}