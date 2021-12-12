import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BodyWidget } from './components/BodyWidget';
import { Application } from './Application';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#2f2f2f',
      paper: '#2f2f2f',
    },
    primary: {
      main: '#2f2f2f'
    },
    secondary: {
      main: '#006bb2'
    },
    text: {
      primary: '#ffffff',
      secondary: '#bfbfbf'
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  var app = new Application();
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BodyWidget app={app} />
    </ThemeProvider>,
    document.querySelector('#application'),);
});
