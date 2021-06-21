import { createMuiTheme } from "@material-ui/core";
import { primaryColor, neutralColor, secondaryColor, terciaryColor } from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "black",
        },
        secondary: {
            main: secondaryColor,
        },
        text: {
            primary: neutralColor
        }
    }
})

export default theme