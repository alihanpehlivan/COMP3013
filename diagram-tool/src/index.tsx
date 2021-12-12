import ReactDOM from 'react-dom';
import App from './app';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#2f2f2f',
      paper: '#2f2f2f',
    },
    primary: {
      main: "#2f2f2f"
    },
    secondary: {
      main: "#006bb2"
    },
    text: {
      primary: "#ffffff",
      secondary: "#bfbfbf"
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.querySelector('#application'),);
});
