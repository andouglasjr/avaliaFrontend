import { mode } from "@chakra-ui/theme-tools";
export const inputStyles = {

  components: {
    Input: {
      baseStyle: (props) => ({
        field:{
          fontWeight: 400,
          borderRadius: "4px",
          border: "1px solid",
          bg: mode("transparent", "transparent")(props),
          color: mode("neutralDark.4", "white")(props),
          borderColor: mode("neutralLight.4", "")(props),
          fontSize: "1rem",
          p: "10px 16px",
          },
      }),    
      variants: {
        input_primary: (props) => ({
          field: {
            _placeholder: { color: "neutralLight.4" },
            _focus: {borderColor: mode("purple.2", "")(props),},
            _invalid: {borderColor: mode("rred.2", "")(props),},
            "&:valid:not(:focus)": {borderColor: mode("neutralDark.0", "")(props),}
            //"&:valid:not(:focus)": {function(){console.log("show papai")}}
          },
        }),
        input_invalid: (props) =>({
          field:{
            //_focus: {borderColor: mode("purple.2", "")(props),},
            borderColor: mode("rred.2","rred.2")(props),
            _placeholder: {color: mode("rred.2","rred.2")(props),}
          }
        }),
        main: (props) => ({
          field: {
            bg: mode("transparent", "navy.800")(props),
            border: "1px solid",
            color: mode("secondaryGray.900", "white")(props),
            borderColor: mode("secondaryGray.100", "whiteAlpha.100")(props),
            borderRadius: "16px",
            fontSize: "sm",
            p: "20px",
            _placeholder: { color: "secondaryGray.400" },
          },
        }),
        input_auth: (props) => ({
          field: {
          },
        }),
        authSecondary: (props) => ({
          field: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "secondaryGray.100",
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        search: (props) => ({
          field: {
            border: "none",
            py: "11px",
            borderRadius: "inherit",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
      },
    },
    NumberInput: {
      baseStyle: {
        field: {
          fontWeight: 400,
        },
      },

      variants: {
        main: (props) => ({
          field: {
            bg: "transparent",
            border: "1px solid",

            borderColor: "secondaryGray.100",
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        auth: (props) => ({
          field: {
            bg: "transparent",
            border: "1px solid",

            borderColor: "secondaryGray.100",
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        authSecondary: (props) => ({
          field: {
            bg: "transparent",
            border: "1px solid",

            borderColor: "secondaryGray.100",
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        search: (props) => ({
          field: {
            border: "none",
            py: "11px",
            borderRadius: "inherit",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
      },
    },
    Select: {
      baseStyle:(props) => ({
        field: {
          fontWeight: 400,
          bg: mode("transparent","transparent")(props),
          border: "1px solid",
          borderColor: "secondaryGray.100",
          borderRadius: "4px",
        },
      }),

      variants: {
        select_primary: (props) => ({
          field: {
            _placeholder: { color: mode("neutralLight.4",)},
            _focus: {borderColor: mode("purple.2", "")(props),},
            _invalid: {borderColor: mode("rred.2", "")(props),},
            "&:valid:not(:focus)": {borderColor: mode("neutralDark.0", "")(props),},
          },
        }),
        select_invalid: (props) =>({
          field: {
            borderColor: mode("rred.2","rred.2")(props),
            _placeholder: {color: mode("rred.2","rred.2")(props),}
          }
        }),
        main: (props) => ({
          field: {
            bg: mode("transparent", "navy.800")(props),
            border: "1px solid",
            color: "secondaryGray.600",
            borderColor: mode("secondaryGray.100", "whiteAlpha.100")(props),
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
          icon: {
            color: "secondaryGray.600",
          },
        }),
        mini: (props) => ({
          field: {
            bg: mode("transparent", "navy.800")(props),
            border: "0px solid transparent",
            fontSize: "0px",
            p: "10px",
            _placeholder: { color: "secondaryGray.600" },
          },
          icon: {
            color: "secondaryGray.600",
          },
        }),
        subtle: (props) => ({
          box: {
            width: "unset",
          },
          field: {
            bg: "transparent",
            border: "0px solid",
            color: "secondaryGray.600",
            borderColor: "transparent",
            width: "max-content",
            _placeholder: { color: "secondaryGray.600" },
          },
          icon: {
            color: "secondaryGray.600",
          },
        }),
        transparent: (props) => ({
          field: {
            bg: "transparent",
            border: "0px solid",
            width: "min-content",
            color: mode("secondaryGray.600", "secondaryGray.600")(props),
            borderColor: "transparent",
            padding: "0px",
            paddingLeft: "8px",
            paddingRight: "20px",
            fontWeight: "700",
            fontSize: "14px",
            _placeholder: { color: "secondaryGray.600" },
          },
          icon: {
            transform: "none !important",
            position: "unset !important",
            width: "unset",
            color: "secondaryGray.600",
            right: "0px",
          },
        }),
        auth: (props) => ({
          field: {
          },
        }),
        authSecondary: (props) => ({
          field: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "secondaryGray.100",
            borderRadius: "16px",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
        search: (props) => ({
          field: {
            border: "none",
            py: "11px",
            borderRadius: "inherit",
            _placeholder: { color: "secondaryGray.600" },
          },
        }),
      },
    },
  },
};
