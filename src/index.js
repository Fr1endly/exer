import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
   palette: {
       primary: {
           main: pink[400]
       },
       secondary: {
           main: indigo[300],
           light: indigo[200]
       },
       type: 'dark'
   },
   spacing: {
       unit: 10
   }
});
console.log(indigo )

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
