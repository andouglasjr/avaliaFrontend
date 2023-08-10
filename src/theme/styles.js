import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
    colors: {
        purple: {
            0: "#C4BDF2",
            1: "#7D6BF2",
            2: "#4B1DF2",
            3: "#360FC3",
            4: "#15005F",
        },
        cyan: {
            0: "#CBF9FF",
            1: "#87F8FF",
            2: "#22ECFF",
            3: "#008296",
            4: "#003440",
        },
        rred: {
            0: "#FFCFC5",
            1: "#FF7E62",
            2: "#DC2B04",
            3: "#97120A",
            4: "#330508",
        },
        yellow: {
            0: "#FFF7DB",
            1: "#FFDB87",
            2: "#FFC847",
            3: "#D79127",
            4: "#5C3200",
        },
        ggreen: {
            0: "#BFF1D6",
            1: "#60C795",
            2: "#048550",
            3: "#006B38",
            4: "#003117",
        },
        neutralLight: {
            0: "#FFFFFF",
            1: "#F9F9FB",
            2: "#F3F4F7",
            3: "#EDEFF2",
            4: "#DBDFE5",
        },
        neutralDark: {
            0: "#637792",
            1: "#536379",
            2: "#424F60",
            3: "#323B49",
            4: "#1C1F24",
        },
    },

    textStyles: {
        h1: {
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            fontSize: '48px',
            lineHeight: '60px',
        },
        h2: {
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            fontSize: '40px',
            lineHeight: '52px',
        },
        h3: {
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            fontSize: '32px',
            lineHeight: '44px',
        },
        h4: {
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            fontSize: '24px',
            lineHeight: '36px',
        },
        Subtitle: {
            fontFamily: 'Manrope',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '12px',
        },
        Subtitle1: {
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '12px',
        },
        Body: {
            fontWeight: 'regular',
            fontSize: '16px',
            lineHeight: '28px',
        },
        Body1: {
            fontFamily: 'Inter',
            fontWeight: 'medium',
            fontSize: '16px',
            lineHeight: '28px',
        },
        Caption: {
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '24px',
        },
        Caption1: {
            fontWeight: 'medium',
            fontSize: '14px',
            lineHeight: '24px',
        },
        Link: {
            fontWeight: 'medium',
            fontSize: '16px',
            lineHeight: '28px',
            textDecoration: 'underline',
        },
        Button: {
            fontFamily: 'Manrope',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '24px',
        },
    },

    styles: {
        global: (props) => ({
            body: {
                overflowX: "hidden",
                bg: mode("secondaryGray.500", "navy.900")(props),
                fontFamily: "DM Sans",
                letterSpacing: "-0.5px",
            },
            input: {
                color: "gray.700",
            },
            html: {
                fontFamily: "DM Sans",
            },
        }),
    },

};