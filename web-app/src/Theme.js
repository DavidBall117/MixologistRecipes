import React from "react";
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
	typography: {
		fontFamily:
			"Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial, sans-serif",
	},
	palette: {
		primary: {
			main: "#55c49d",
			// light: "#89f7ce",
			light: "#aadad2",
			dark: "#15936f",
			contrastText: "#000000",
		},
		secondary: {
			main: "#007f76",
			light: "#4bafa5",
			dark: "#00524a",
			contrastText: "#ffffff",
		},
	},
});

theme = responsiveFontSizes(theme);

export default function Theme(props) {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
