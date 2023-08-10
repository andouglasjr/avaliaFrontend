export const tableStyles = {
    components: {
        Table: {
            variants: {
                custom: {
                    th: {
                        textTransform: "none",
                        color: "neutralDark.0",
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        padding: "24px"
                    },
                    tbody: {
                        tr: {
                            td: { padding: "24px" },
                            gap: "24px",
                            _hover: {
                                backgroundColor: "neutralLight.1",
                                cursor: "pointer",
                            },
                            _active: {
                                backgroundColor: "neutralLight.3",
                            },
                        }
                    }
                },
            }
        },
    },
}
