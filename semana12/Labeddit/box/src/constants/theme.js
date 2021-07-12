import { createMuiTheme } from "@material-ui/core";
import { primaryColor, secondaryColor } from "./colors";

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
            primary: secondaryColor
        }
    }
})

export default theme