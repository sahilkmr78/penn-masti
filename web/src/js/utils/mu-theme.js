import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlack, darkBlack, white, grey300 } from 'material-ui/styles/colors';
import { fade, darken } from 'material-ui/utils/colorManipulator';

// const primaryColor = '#c52d2f';
const primaryColor = darken('#fa0209', 0.15);
module.exports = getMuiTheme({
  palette: {
    primary1Color: primaryColor,
    // primary2Color: '#FA0209',
    // primary3Color: '#FA0209',
    // accent1Color: '#FA0209',
    // accent2Color: '#FA0209',
    // accent3Color: '#FA0209',
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
  },
});
