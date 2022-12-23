import { createTheme } from "@mui/material/styles";

let myCustomTheme = createTheme({
    palette: {
        primary: {
            main: "#3064EB",
        },
        secondary: {
            main: "#69B749",
        },
        text: {
            primary: "#242429",
        },
    },
    spacing: 8,
    // Typography
    typography: {
        fontFamily: "Roboto,sans-serif",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        }
    },
});

myCustomTheme = createTheme(myCustomTheme, {
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: "1px solid #EBEBEB",
                    "& .MuiCardHeader-root": {
                        "& .MuiCardHeader-subheader": {
                            display: "flex",
                            flexWrap: "wrap",
                            lineHeight: '22px',
                            fontSize: '16px',
                            color: [myCustomTheme.palette.text.primary],
                        },
                    },
                    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.09)",
                    borderRadius: "10px",
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    padding: 8,
                    fontWight: 500,
                },

                sizeMedium: {
                    fontSize: "20px",
                    textTransform: "capitalize",
                    lineHeight: "24px",
                    borderRadius: "5px",
                    "&.MuiButton-textSizeMedium": {
                        fontWeight: "300",
                        fontSize: "15px",
                        lineHeight: "18px",
                        color: "#3A3A3A",
                        boxShadow: "none",
                    },
                },
                containedPrimary: {
                    padding: "15px 25px",
                    "&.MuiButton-containedSizeSmall": {
                        fontSize: "16px",
                        lineHeight: "18px",
                        textTransform: "capitalize",
                        padding: "5px 25px",
                        boxShadow: "none",
                    },
                },
                outlinedPrimary: {
                    fontSize: "20px",
                    lineHeight: "24px",
                    textTransform: "capitalize",
                    border: "2px solid",
                    padding: "12px 25px",
                    '&:hover': { borderWidth: "2px", backgroundColor: [myCustomTheme.palette.primary.main], color: "#FFFFFF" },
                },


            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    // backgroundColor: [myCustomTheme.palette.primary.main],
                    borderRadius: "10px",
                    // '&:hover': { backgroundColor: "rgb(33, 70, 164)" },
                    "&.MuiIconButton-sizeSmall": {
                        borderRadius: "5px",
                        '&:hover': { backgroundColor: "rgb(33, 70, 164)" },
                    }
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: "15px",
                    lineHeight: "26px",
                    borderColor: "#D8D8D8",
                    borderRadius: '5px',
                },
                // inputTypeSearch: {
                //     backgroundColor: "red",
                // },
                sizeSmall: {
                    input: {
                        backgroundColor: "#FFFFFF",
                        caretColor: [myCustomTheme.palette.primary.main],
                        padding: "8px 15px",
                        borderRadius: "5px",
                        border: "1px solid #D8D8D8",
                    }
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#BEBEBE",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        "& .MuiOutlinedInput-notchedOutline":{
                            borderColor: [myCustomTheme.palette.primary.main],
                        },
                     },
                },

                input: {
                    padding: "14px",
                    borderColor: "rgb(33, 70, 164)",
                },
            },
        },
    },

},
);


export default myCustomTheme;
